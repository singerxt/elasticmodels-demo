'use strict'
const { sendResponse, sendError } = require('../common')
const { games } = require('../../models')

const handleRequest = ({ sendResponsem, sendError }) => ({
  handleRequest: () => games.find()
    .then(docs => docs.getDocuments())
    .then(sendResponse)
    .catch(sendError)
})

const gamesController = (req, res, next) => {
  const state = {
    req,
    res,
    next,
    sendResponse: sendResponse({ req, res, next }).sendResponse,
    sendError: sendError({ req, res, next }).sendError
  }

  return Object.assign(
    {},
    handleRequest(state)
  )
}

module.exports = gamesController
