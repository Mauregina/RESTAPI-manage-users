require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config/config')

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

const url = config.bd_string

mongoose.connect(url)
.then(()=>{
    console.log('Connected to MongoDB')
    app.listen(3000)
})
.catch((err)=>console.log(err))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
