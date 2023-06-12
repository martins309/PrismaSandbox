const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller.js')


// Get User




//Post new user
router.post('/', userController.newUser)


//Edit user



//Delete User 

module.exports = router