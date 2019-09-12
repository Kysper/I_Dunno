const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    imageUrl: {
        type: String,
    },

   srcLink:{
        type:String,
    },
    calories: {
        type:String   
    },
    ingredients:{
        type:Array
    }

})


const Recipe = mongoose.model('Recipe', recipeSchema)


module.exports = Recipe;