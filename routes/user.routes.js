const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')


//GET



//POST
router.post('/', userController.newUser)

//PUT


//DELETE

module.exports = router