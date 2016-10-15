'use strict'

const router = require('express').Router()
const { games } = require('./models')
const gamesController = require('./controllers/games')

router.get('/games', (req, res, next) => gamesController(req, res, next).handleRequest())

module.exports = router
