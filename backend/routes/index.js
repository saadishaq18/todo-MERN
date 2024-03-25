const express = require('express')
const taskRoute = require('./task')
const router = express.Router()

router.use('/task', taskRoute)

module.exports = router