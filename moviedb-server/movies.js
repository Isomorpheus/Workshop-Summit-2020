exports.movies = [
  {
    id: 'd4004566',
    name: '1917',
    poster:
      'https://resizing.flixster.com/LLzENQivcAMTes-i92aO5BN8ctk=/fit-in/200x296.2962962962963/v1.bTsxMzIwMzIxOTtqOzE4Mzc3OzEyMDA7Mjc2NTs0MDk2',
    likes: [],
    comments: [],
  },
  {
    id: '491e9dba',
    name: 'Knives Out',
    poster:
      'https://resizing.flixster.com/2bJScPd_xr8K45Qd2bEpFzA2ytE=/fit-in/200x296.2962962962963/v1.bTsxMzE5MDI4NjtqOzE4Mzc3OzEyMDA7MTk0NDsyODgw',
    likes: [],
    comments: [],
  },
  {
    id: '1a0d2fd6',
    name: 'The Invisible Man',
    poster:
      'https://resizing.flixster.com/c1x63RVaZA5sTO7nAdMaONj9A18=/206x305/v1.bTsxMzIzOTQzNztqOzE4Mzc4OzEyMDA7MzE1ODs1MDAw',
    likes: [],
    comments: [],
  },
  {
    id: '7913b887',
    name: 'Bad Boys for Life',
    poster:
      'https://resizing.flixster.com/yuxBgHMHtKzDj9U1W2v5CwyXD-8=/fit-in/200x296.2962962962963/v1.bTsxMzI3ODg1OTtqOzE4Mzc4OzEyMDA7NjA3Mjs5MDAw',
    likes: [],
    comments: [],
  },
  {
    id: 'ec67602d',
    name: 'The Irishman',
    poster:
      'https://resizing.flixster.com/trUMJEXtGDUCK6nrKUyWGdv2jak=/fit-in/200x296.2962962962963/v1.bTsxMzE4OTE2NTtqOzE4Mzc3OzEyMDA7MjAwMDsyOTI5',
    likes: [],
    comments: [],
  },
  {
    id: '5418d7b4',
    name: 'Frozen II',
    poster:
      'https://resizing.flixster.com/ICnc3FlZ6u1WkQUTgGGW6l0WVGQ=/fit-in/200x296.2962962962963/v1.bTsxMzIwMzIxODtqOzE4Mzc3OzEyMDA7NTQwOzgxMA',
    likes: [],
    comments: [],
  },
  {
    id: '429347e9',
    name: 'Abominable',
    poster:
      'https://resizing.flixster.com/B-dFsl8VXfybJmLr2WCI4wmWjW4=/fit-in/200x296.2962962962963/v1.bTsxMzIwNDU4MTtqOzE4Mzc3OzEyMDA7ODA4OzEyMTI',
    likes: [],
    comments: [],
  },
  {
    id: '6f12b3a9',
    name: 'Ad Astra',
    poster:
      'https://resizing.flixster.com/hLaM-zB46AljBuAECW3gmbDnXnc=/fit-in/200x296.2962962962963/v1.bTsxMzEzMTgyNjtwOzE4Mzc2OzEyMDA7OTAwOzEzNTA',
    likes: [],
    comments: [],
  },
  {
    id: '5df4f903',
    name: 'A Shaun the Sheep Movie: Farmageddon',
    poster:
      'https://resizing.flixster.com/IHQVWdU0MNzm-AfEtoVVskkPsE0=/fit-in/200x296.2962962962963/v1.bTsxMjkzMjYwOTtqOzE4Mzc0OzEyMDA7NTA5Ozc1NQ',
    likes: [],
    comments: [],
  },
  {
    id: 'a3eb1b36',
    name: 'The Lighthouse',
    poster:
      'https://resizing.flixster.com/lHS3NgECJkSRhBgF0Pk4Qg7mHBk=/fit-in/200x296.2962962962963/v1.bTsxMzE4MDM2NDtqOzE4Mzc3OzEyMDA7NDA1MDs2MDAw',
    likes: [],
    comments: [],
  },
]

exports.getMovieById = id => exports.movies.find(m => m.id === id)
