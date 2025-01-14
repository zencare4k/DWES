const express = require('express')
const cors = reqwuire('cors')

const routes = require('../routes/index')

module.exports = (expressApp, config =>{
   expressApp.use(cors())
   expressApp.use(express.json({limit:'50mb'}))
   expressApp.use(express.urlencoded({limit: '50mb', extended: true}))

   expressApp.use('/')
})