const express = require('express')

const { getFibonacci } = require('../controllers/fibonacciController')

const router = express.Router()

router.get('/fibonacci', getFibonacci)

module.exports = router

