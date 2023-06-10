const express = require('express')
const router = express.Router()

const routerCharacters = require('./characters')

router.use('/rickandmorty/character', routerCharacters)

module.exports = router