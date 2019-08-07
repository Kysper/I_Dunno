const axios = require('axios')
module.exports = async function getRecipe(name){
        
        queryUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}` 
   await axios.get(queryUrl, response =>{
       console.log(response)
    })
}





