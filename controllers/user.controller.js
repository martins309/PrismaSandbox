const userModel = require('../models/user.model')


//GET
const findUserById = async (req, res) => {
    const { id } = req.params.id
    const response = await userModel.findUserById(id)
    console.log(response)
    if(response){
        res.json(response)
    }else{
        res.send('cannot find user')
    }
}



//POST
const newUser = async (req, res) => {
    const {firstname, lastname, email, password} = req.body
    const response = await userModel.createUsers(firstname, lastname, email, password)
    if(response){
        res.json(response)
    }else{
        res.send('user not created')
    }
}


//UPDATE



//DELETE


module.exports = {
    newUser,
    findUserById
}