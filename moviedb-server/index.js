const { ApolloServer, gql, PubSub, withFilter } = require('apollo-server')
const { movies, getMovieById } = require('./movies')
const shortid = require('shortid')

const pubsub = new PubSub()

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    likes: Int!
    liked: Boolean
    poster: String!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    userId: ID!
    text: String!
    date: String!
  }

  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
  }

  type Mutation {
    toggleLikeMovie(input: ToggleLikeMovieInput!): Movie!
    commentMovie(input: CommentMovieInput!): Comment!
  }

  input ToggleLikeMovieInput {
    movieId: ID!
  }

  input CommentMovieInput {
    movieId: ID!
    text: String!
  }

  type Subscription {
    movieUpdated: Movie!
    commentAdded(movieId: ID!): Comment!
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Movie: {
    likes: movie => movie.likes.length,
    liked: (movie, args, context) =>
      context.userId && movie.likes.includes(context.userId),
    comments: movie => movie.comments.reverse(),
  },

  Query: {
    movies: (root, args, context) => movies,
    movie: (root, { id }, context) => getMovieById(id),
  },

  Mutation: {
    toggleLikeMovie: (root, { input }, context) => {
      const { userId } = context
      const movie = getMovieById(input.movieId)
      if (!movie) {
        throw new Error(`Movie with id ${input.movieId} not found`)
      }
      const index = movie.likes.indexOf(userId)
      if (index !== -1) {
        movie.likes.splice(index, 1)
      } else {
        movie.likes.push(userId)
      }
      pubsub.publish('movieUpdated', {
        movieUpdated: movie,
      })
      return movie
    },

    commentMovie: (root, { input }, context) => {
      const { userId } = context
      const movie = getMovieById(input.movieId)
      if (!movie) {
        throw new Error(`Movie with id ${input.movieId} not found`)
      }
      const comment = {
        id: shortid(),
        userId,
        text: input.text,
        date: new Date().toISOString(),
      }
      movie.comments.push(comment)
      pubsub.publish('commentAdded', {
        movie,
        commentAdded: comment,
      })
      return comment
    },
  },

  Subscription: {
    movieUpdated: {
      subscribe: () => pubsub.asyncIterator(['movieUpdated']),
    },

    commentAdded: {
      subscribe: withFilter(
        () => pubsub.asyncIterator('commentAdded'),
        (payload, variables) => payload.movie.id === variables.movieId,
      ),
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, connection }) => {
    let userId
    if (req && req.headers['x-user-id']) {
      userId = req.headers['x-user-id']
    }
    return {
      userId,
    }
  },
  subscriptions: {
    path: '/subscriptions',
    onConnect: (connectionParams, webSocket) => {
      let userId
      if (connectionParams.userId) {
        userId = connectionParams.userId
      }
      return {
        userId,
      }
    },
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
