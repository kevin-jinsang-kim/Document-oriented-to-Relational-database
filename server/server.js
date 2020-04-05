const path = require('path')
const express = require('express')
const songs = require('./routes/songs')
const bodyParser = require('body-parser')


const server = express()

server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/songs', songs)

module.exports = server
