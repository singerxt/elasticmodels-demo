'use strict'

const app = require('express')()
const { port, appName } = require('./src/config')
const { info } = require('winston')
const { routes } = require('./src')

app.use(routes)

app.listen(port, () => {
  info(`${appName} is listening at port: ${port}`)
})
