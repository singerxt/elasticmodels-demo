'use strict'

const sendResponse = (state) => ({
  sendResponse: (data) => state.res.send(data)
})

module.exports = {
  sendResponse
}