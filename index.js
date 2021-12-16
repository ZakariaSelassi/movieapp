const express = require("express")
const app = express()
require('dotenv').config();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const moviesRoute = require("./src/api/movies")





app.use('/', moviesRoute)
app.listen(process.env.PORT , () => {
    console.log(`server running at ${process.env.PORT}`)
})