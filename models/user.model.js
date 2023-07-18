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
        try {
            const user = await prisma.users.findUnique({
                where: {
                    id: id

                },
            })
            if(!id) {
                console.log("id is not found")
            }
            return user
        } catch (error) {
            console.error({ msg: error.message })
            
            
        }
    }


}


module.exports = User