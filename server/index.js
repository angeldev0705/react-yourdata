const express = require('express')
const consola = require('consola')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

const { config } = require('../config')
const { jwt } = require('./lib/jwt')

const { deployAndGenerate } = require("./controllers/deployAndGenerate.js")

app.use(cors())
app.use(morgan('combined'))
app.get('/generate', jwt(config.deployServer.secret), deployAndGenerate)

app.listen(config.deployServer.port, '0.0.0.0')

consola.ready({
    message: `Server listening on 0.0.0.0:${config.deployServer.port}`,
    badge: true
})
