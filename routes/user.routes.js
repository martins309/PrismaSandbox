const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')


//GET
router.get('/:id', userController.findUser)


//POST
router.post('/', userController.newUser)

//PUT


//DELETE

module.exports = router