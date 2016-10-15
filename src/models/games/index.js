'use strict'

const { schema, dataTypes } = require('../baseModel')
const { string, double } = dataTypes

const games = schema('games', {
  id: {
    translation: '_id',
    type: string
  },
  type: {
    translation: '_type',
    type: string
  },
  name: {
    type: string
  },
  genres: {
    type: []
  },
  platforms: {
    type: []
  },
  youTubeGameTrailerUrl: {
    type: string
  },
  creator: {
    type: string
  },
  about: {
    type: string
  },
  rate: {
    type: double
  }
}, {
  index: 'games'
})

module.exports = games
