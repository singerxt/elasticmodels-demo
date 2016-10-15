'use strict'

const router = require('express').Router()
const { games } = require('./models')
router.get('/games', (req, res, next) => {
  games.find().then(documents => documents.getDocuments()).then((result) => {
    res.send(result)
  })
})

module.exports = router
