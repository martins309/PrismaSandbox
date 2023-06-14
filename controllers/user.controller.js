const userModel = require('../models/user.model.js')

// Get user information fromn the databse
const findUser = async (req, res) => {
    const { id } = req.params.id
    const response = await userModel.findUser(id)
    if(response) {
        res.json(response)
    }else {
        res.send("Cannot find user..")
    }
}




//Post new user information to the databse 
const newUser = async (req, res) => {
    const { first, last, email, license_number } = req.body
    const response = await userModel.createUser(first, last, email, license_number)
    if(response) {
        res.json(response)
    }else {
        res.send("User not created")
    }
}




//Edit user information in the database





//Delete that nigga from the database 






module.exports = {
    newUser,
    findUser
}