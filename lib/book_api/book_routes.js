const express = require('express')
const Book = require('./book_model')
const customError = require('./custom_error')
const handle404 = customError.handle404

const router = express.Router()

//CREATE THE PATH/ROUTE 
router.get('/books', (request, response, next) => {
    Book.find()
    .then( (books) => {
        response.status(200).json({books:books} )
    })
   .catch( next ) 
})

router.get('/books/:id', (request, response, next) => {
    // GET the id from params
    const id = request.params.id
    Book.findById(id)
    .then(handle404)
    .then( (book) => {
        response.status(200).json({book:book} )
    })
    .catch( next) 
})

router.post('/books', (request,response,next) => {
    const newBook = request.body.book
    Book.create(newBook)
    .then( (book) => {
        response.status(201).json({book:book})
    })
    .catch(next) 
})

router.delete('/books/:id', (request, response, next) => {
    // GET the id from params
    const id = request.params.id
    Book.findByIdAndRemove(id)
    .then( () => {
        response.sendStatus(204)
    })
    .catch(next) 
})

router.put('/books/:id', (request, response,next) => {
    // GET the id from params
    const id = request.params.id
    const newUpdate = request.body.book
    Book.findByIdAndUpdate(id,newUpdate,{new:true})
    .then( (book ) => {
        response.status(200).json({book:book} )
    })
    .catch( next) 
})

//To export the router 
module.exports = router