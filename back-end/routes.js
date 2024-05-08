const express = require('express')
const router = express.Router()

const Ticket = require('./schema')
const cors = require('cors')
const app = express()

router.use(express.json())
router.use(cors())

