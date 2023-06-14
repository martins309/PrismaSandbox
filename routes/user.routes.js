const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller.js')


// Get User
router.get('/:id', userController.findUser)



//Post new user
router.post('/', userController.newUser)


//Edit user



//Delete User 

module.exports = router