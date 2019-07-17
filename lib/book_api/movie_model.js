const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    director:{
        type:String,
        required:true
    }   
},
    {
        timestamps: true,
        toJSON:{
            // virtuals:true
        }
    }
)

// movieSchema.virtual('introduction').get(function(){
//     return this.title+ ' directed by ' + this.director
// })

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie