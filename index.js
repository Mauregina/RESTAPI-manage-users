require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
const userRoutes = require('./routes/userRoutes')

app.use('/person', personRoutes)
app.use('/user', userRoutes)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.0svze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(3000)
})
.catch((err)=>console.log(err))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
