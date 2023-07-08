const express = require('express')

//initialization

const PORT = process.env.PORT || 8000
const app = express()

app.listen(PORT, () => {
    console.log(`no more fucking around ${PORT}`)
})

//middleware

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

module.exports = app




