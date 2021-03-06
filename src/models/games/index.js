'use strict'

const { schema, dataTypes } = require('../baseModel')
const { string, double } = dataTypes
const { basePath } = require('../../config')
const R = require('Ramda')

const games = schema('games', {
  '@context': {
    type: string,
    translation: () => 'http://schema.org'
  },
  '@type': {
    type: string,
    translation: () => 'Game'
  },
  '@id': {
    type: string,
    dependencies: ['_id'],
    translation: (id) => `${basePath}/games/${id}`
  },
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
  index: 'games',
  collectionHeader: (options) => ({
    '@context': 'http://schema.org',
    '@type': 'Collection',
    totalCount: R.view(
      R.lensPath(['rawData', 'hits', 'total']),
      options
    )
  }),
  collectionFooter: (options) => ({
    first: '',
    next: '',
    last: ''
  }),
  wrapDocumentIn: 'members'
})

module.exports = games
