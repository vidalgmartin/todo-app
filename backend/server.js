// module imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const birthdayRoutes = require('./routes')

// environmental variables 
require('dotenv').config()

// variable to initialize an Express.js web application
const app  = express()

// Enable CORS for all routes
app.use(cors());

// middleware for parsing json in the request body
app.use(express.json())

// routes
app.use('/api', birthdayRoutes)

// connect to MongoDB atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
            // start to listening for requests only if it's connected to the database
            app.listen(process.env.PORT, () => {
                console.log('Hey there! server is running on port', process.env.PORT)
            })
        })
    .catch((error) => {
        console.log(error)
    })