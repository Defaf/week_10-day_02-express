//import some libraries
const express = require('express')
const bodyParser = require('body-parser')
const memes = [
    {
    id: 1,
    title: "Angry",
    image: "http://imgur.com/kH6o0mN.png"
    },
    {
    id: 2,
    title: "Aww Yeah",
    image: "http://imgur.com/vTSZ6CG.png"
    },
    {
    id: 3,
    title: "Cereal Guy",
    image: "http://imgur.com/SjnMMhd.png"
    }
  ]

const app = express()

app.use(bodyParser.json())

// get /memes
app.get('/memes', (request, response) =>{
    const memeObject ={
        memes:memes
    }
    response.status(200).json(memeObject)
})
//get /memes/:id
app.get('/memes/:id', (request, response) => {
    // "1" also, I can use Number() to convert from string to number
    const id = parseFloat(request.params.id)  
    console.log(request.params.id)

    const myMeme = memes.find( (sMeme) =>{ sMeme.id === id})
    const memesObject={
        myMeme: myMeme
    }
    response.status(200).json(memesObject)
})
//post /memes
app.post('/memes', (request, response) =>{
    console.log(request.body)
    const newMeme = request.body.meme 
    const id = memes[memes.length-1].id + 1
    newMeme.id = id
    memes.push(newMeme)
    response.status(201).json(newMeme)
})
//delete /memes/:id
app.delete('/memes/:id', (request, response) => {
    const id = parseFloat(request.params.id)  
    const newMeme = memes.filter((sMeme) => {sMeme.id !== id})
    memes = newMeme
    response.sendStatus(204)  
})
/**
 * update /memes/:id 
 * I can use put / patch if I want to use update 
 */
app.put('/memes/:id', (request, response) => {
    const id = parseFloat(request.params.id) 
    const index = memes.findIndex( (sMeme) => { sMeme.id === id})
    const updateMeme = request.body.meme
    updateMeme.id = id 
    memes[index] = updateMeme
    response.status(200).json(updateMeme)
})

app.listen(3000, () => {console.log("Hey You're server is running on port 3000")})
