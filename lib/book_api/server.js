const express = require('express')
const bodyParser = require('body-parser')
const bookRoutes = require('./book_routes')
const mongoose = require('mongoose')
const database = require('./config')
const requestLogger = require('./requestLogger')
const errorHandler = require('./error_handler')
const movieRoutes = require('./movie_routes')

mongoose.Promise = global.Promise
mongoose.connect(database, {
  useMongoClient: true
})
.then( () => {
  console.log(" GREATE.. you're just connect to the DB")
})
.catch( () =>{
  console.log("SORRY!!.. you couldn't connect to the DB")
})

// CREATE A NEW APP FROM express()
const app = express()

// parse the body for JSON 
app.use(bodyParser.json())
app.use(requestLogger)
app.use(movieRoutes)
app.use(bookRoutes)
app.use(errorHandler)

//CREATE THE LISTENING PORT 
app.listen(3000, () => {console.log("Hey You're server is running on port 3000")})