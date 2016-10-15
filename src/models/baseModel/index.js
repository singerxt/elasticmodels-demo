'use strict'
const { Client } = require('elasticsearch')
const elasticModels = require('ElasticModels')
const { elasticsearch } = require('../../config')
const client = new Client({
  host: `${elasticsearch.host}:${elasticsearch.port}`
})
client.ping()

module.exports = elasticModels(client, {})
