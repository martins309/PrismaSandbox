//initializations
const PORT = proccess.env.PORT || 3333
const app = express()

app.listen(PORT, () => {
    console.log(`lets get to the grizzy: ${PORT}`)
})

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

module.exports = app