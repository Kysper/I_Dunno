import axios from 'axios'

const node = document.createElement('li')
const recipe = {}

const url = `http://127.0.0.1:3000/search-recipe`
axios .get(url)
      .then(async response => {
        response.forEach(cur =>{
          recipeCard = `<div></div>`
         
        })
      })
       