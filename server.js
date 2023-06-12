const express = require('express')
const userRouter = require('./routes/user.routes')

//initializations
const PORT = process.env.PORT || 3333
const app = express()

app.listen(PORT, () => {
    console.log(`lets get to the grizzy: ${PORT}`)
})

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routes
app.use('/user', userRouter)




module.exports = app