'use strict'

const sendResponse = ({ res }) => ({
  sendResponse: data => res.send(data)
})

const sendError = ({ res }) => ({
  sendError: e => res.send(e)
})

const createPagination = (state) => ({
  createPagination: data => ({})
})

module.exports = {
  sendResponse,
  createPagination,
  sendError,
}
