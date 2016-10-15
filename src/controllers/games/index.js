'use strict'
const { sendResponse } = require('../common')
const { games } = require('../../models')

const handleRequest = ({ sendResponse }) => ({
  handleRequest: () => games.find().then(docs => docs.getDocuments()).then(sendResponse).catch()
})

const gamesController = (req, res, next) => {
  const state = {
    req,
    res,
    next,
    sendResponse: sendResponse({ req, res, next }).sendResponse
  }

  return Object.assign(
    {},
    handleRequest(state)
  )
}

module.exports = gamesController
