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
    //finds user 
    static async findUser(id) {
        try {
            const user = await prisma.users.findUnique({
                where: {
                    id: 1,

                }
            })
            return user
        } catch (error) {
            console.error({msg: error.message})
            
        }
    }

    static async updateUser(id, newData) {
        try {
            const user = await prisma.users.update({
                where: {
                    id: 3,
                },
                data: {
                    first: "Mr. King",
                    last: "Shit",
                    email: "kittykittylicklick23@hotmail.com",
                    license_number: "dznutz"
                }
            })
            return user
        } catch (error) {
            console.error({msg: error.message})
        }
    }

    static async deleteUser(id) {
        try {
            const user = await prisma.users.delete({
                where: {
                    id: 2,
                }
            })
            return user
        } catch (error) {
            console.error({msg: error.message})
        }
    }
  
}

module.exports = User 