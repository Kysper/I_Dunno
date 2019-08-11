const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    category:{
        type:String,
    },
    area:{
        type:String,
    },
    instructions:{
        type:String,
        trim:true
    },
    imageUrl: {
        type: String,
    },

    videoUrl:{
        type:String,
    },
    ingredients: {
        type:String   
    },

})


const Recipe = mongoose.model('Recipe', recipeSchema)


module.exports = Recipe;