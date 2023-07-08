const  prisma  = require("../prisma/prisma") 

class User {
    constructor(firstname, lastname, email, password, image_url) {
        this.firstname = firstname
        this.lastname = lastname,
        this.email = email,
        this.password = password,
        this.url = image_url
    }

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
}


module.exports = User