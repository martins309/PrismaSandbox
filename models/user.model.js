import prisma from "../prisma/"

class User {
    constructor(firstname, lastname, email, password) {
        this.firstname = firstname
        this.lastname = lastname,
        this.email = email,
        this.password = password
    }

    static async createUsers(firstname, lastname, email, password) {
        try {
            const response = user.prisma.create({})
        } catch (error) {
            
        }

    }
}


module.exports = User