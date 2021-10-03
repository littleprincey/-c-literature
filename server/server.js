
const express = require('express')
const path = require('path')

const bookRoutes = require('./routes/bookRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, '/public')))

server.use('/api/v1/books', bookRoutes)

server.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })

module.exports = server

