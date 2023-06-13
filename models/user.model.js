const prisma = require("../prisma/prisma.js")


class User {
    constructor(first, last, email, license_number) {
        this.first = first,
        this.last = last,
        this.email = email,
        this.license_number = license_number
    }
    //Creates new user
    static async createUser(first, last, email, license_number) {
        try {
            const user = await prisma.users.create({
                data: {
                    first: first,
                    last: last,
                    email: email,
                    license_number: license_number
                }
            })
            return user
        } catch (error) {
            console.error({msg: error.message})
            
        }
    }

    static async findUser(id) {
        try {
            const user = await prisma.users.findUnique({
                where: {
                    id: id
                }
            })
            return user
        } catch (error) {
            console.error({msg: error.message})
            
        }
    }
    
}

module.exports = User 