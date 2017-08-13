'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')
const api = require('./routes/routesProduct')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

//controladores de Productos
app.use('/api',api)

module.exports = app