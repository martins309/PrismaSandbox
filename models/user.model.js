const  prisma  = require("../prisma/prisma") 

class User {
    constructor(id, firstname, lastname, email, password, image_url) {
        this.id = id
        this.firstname = firstname
        this.lastname = lastname,
        this.email = email,
        this.password = password,
        this.url = image_url
    }

    //POST 
    static async createUsers(firstname, lastname, email, password, image_url) {
        try {
            const user = await prisma.users.create({
                data: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    image: image_url
                }
            })
            return user
        } catch (error) {
            console.error({ msg: error.message })
        }

    }
    //GET

    static async findUserById(id) {
        if(!id){
            console.log('id not found')
        }
        try {
            const user = await prisma.users.findUnique({
                where: {
                    id
                },
            })
         
            return user
        } catch (error) {
            console.error({ msg: "where is the id" })
            
            
        }
    }


}


module.exports = User