// module imports
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const taskRoutes = require('./routes/tasks')

// environmental variables 
require('dotenv').config()

// variable to initialize an Express.js web application
const app  = express()

// allow all incoming requests
app.use(cors())

// middleware for parsing json in the request body
app.use(express.json())

// routes
app.use('/api', taskRoutes)

// connect to MongoDB atlas
mongoose.connect(process.env.MONGO_URI, {
    dbName: 'test'
})
.then(() => {
        // start to listening for requests only if it's connected to the database
        app.listen(process.env.PORT, () => {
            console.log('Hey there! server is running on port', process.env.PORT)
        })
    })
.catch((error) => {
    console.log(error)
})