const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')


//GET
router.get('/:id', userController.findUserById)


//POST
router.post('/', userController.newUser)


//PUT



//DELETE

git 

module.exports = router