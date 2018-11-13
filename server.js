const express = require('express')
const {Nuxt} = require('nuxt')
const path = require('path')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const app = express()

app.use(awsServerlessExpressMiddleware.eventContext())

app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist', 'client')))

app.use('/static', express.static(path.join(__dirname, 'static')))

let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)

app.use((req, res) => {
  req.url = `${config.router.base}${req.url}`.replace('//', '/')
  nuxt.render(req, res)
})

module.exports = app