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
    ingredients: {
        type:String   
    },

})


const Recipe = mongoose.model('Recipe', recipeSchema)


module.exports = Recipe;