const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller.js')


// Get User
router.get('/:id', userController.findUser)


//Post new user
router.post('/', userController.newUser)

//Edit user
router.put('/:id', userController.updateUser)


//Delete User 
router.delete('/:id', userController.deleteUser)



module.exports = router