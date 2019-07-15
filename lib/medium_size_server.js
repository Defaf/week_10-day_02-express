const express = require('express')
const bodyParser = require('body-parser')

// for this example, we'll use an in-memory array in place of a database
const books = [
  { title: 'Dictionary', author: 'Webster' },
  { title: 'Encyclopedia', author: 'Encarta' },
  { title: 'Clean Code', author: 'Robert Cecil Martin' }
]

// CREATE A NEW APP FROM express()
const app = express()

// parse the body for JSON 
app.use(bodyParser.json())

//CREATE THE PATH/ROUTE 
app.get('/books', (request, response) => {
  /**
   * => here we can pass the content of bookObject inside the stringify
   * but to make it more organizing we save it in the varible and pass the 
   * varible name inside the stringify() to print the key with its value 
   * 
   * => status() to inform us some messages if there is an errors 
   * tell us if the request is succesful or not 
   * 
   * (200) => means it is successful 
   * (400) => means is not successful
   * and there some other http code for response a message 
   * SEE MORE ABOUT HTTP CODES FROM HERE: https://www.restapitutorial.com/httpstatuscodes.html
   */
  const bookObject = {
    books:books
  }
  response.status(200).send( JSON.stringify(bookObject) )
})

app.get('/books/:id', (request, response) => {
  // GET the id from params
  const id = request.params.id
  console.log(request.params.id)
  //GET the book from mthe array 
  const myBook = books[id]
  // Create an object with a book key to turn into JSON 
  const myBookObject = {
    myBook:myBook
  }
  // SEND back to JSON of our book and 200 response 
  /**
   * (line 48 ) convert it to JSON using JSON.stringify()
   */
  // response.status(200).send(JSON.stringify( {myBookObject} ) )
  /**
   * te different between the code below and the above is 
   * => ABOVE: it will convert it to JSON using JSON.stringify() and if you go to POSTMAN 
   * it will represent the code in HTML style and you have to change it to JSON 
   * ==========================
   * => .json():BUT here it will convert it to JSON dynamic and if we go to POSTMAN 
   * it will display it as JSON by default 
   */
  response.status(200).json({myBookObject} )

  /**
   * ALSO, you can write the above code in shortcut ver. like this 
   * ===========================
   * response.status(200).send(JSON.stringify( {
   * myBook:books[request.params.id]
   * } ) )
   * ===========================
   * and remove the lines from ( 36 - 43 )
   */
})

app.post('/books', (request,response) => {
  console.log(request.body)
  // request.body.book => book here means the key of book that inside POSTMAN
  const newBook = request.body.book
  books.push(newBook)
  response.status(200).json(newBook)
})
//CREATE THE LISTENING PORT 
app.listen(3000, () => {console.log("Hey You're server is running on port 3000")})