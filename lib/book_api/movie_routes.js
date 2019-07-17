const express = require('express')
const Movie = require('./movie_model')
const customError = require('./custom_error')
const handle404 = customError.handle404

const router = express.Router()

//CREATE THE PATH/ROUTE 
router.get('/movies', (request, response, next) => {
    Movie.find()
    .then( (movies) => {
        response.status(200).json({movies:movies} )
    })
   .catch( next ) 
})

router.get('/movies/:id', (request, response, next) => {
    // GET the id from params
    const id = request.params.id
    Movie.findById(id)
    .then(handle404)
    // .then((movie) => console.log(movie.toJSON()) )
    .then( (movie) => {
        response.status(200).json({movie:movie} )
    })
    .catch( next) 
})

router.post('/movies', (request,response,next) => {
    const newMovie = request.body.movie
    Movie.create(newMovie)
    .then( (movie) => {
        response.status(201).json({movie:movie})
    })
    .catch(next) 
})

router.delete('/movies/:id', (request, response, next) => {
    // GET the id from params
    const id = request.params.id
    Movie.findByIdAndRemove(id)
    .then( () => {
        response.sendStatus(204)
    })
    .catch(next) 
})

router.put('/movies/:id', (request, response,next) => {
    // GET the id from params
    const id = request.params.id
    const newUpdate = request.body.movie
    Movie.findByIdAndUpdate(id,newUpdate,{new:true})
    .then( (movie ) => {
        response.status(200).json({movie:movie} )
    })
    .catch( next) 
})

//To export the router 
module.exports = router