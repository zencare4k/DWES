const express = require('express')

const fibonacciRoutes = require('./fibonacciRoutes')
const router = require('./fibonacciRoutes')

const routes = express.Router()

router.get('./ping', (req, res)=> res.send('pong'))

router.use(fibonacciRoutes)

module.exports = router

