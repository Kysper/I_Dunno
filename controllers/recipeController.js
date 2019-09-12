const axios = require("axios");
require("dotenv");

function Recipe(id, title, imageUrl,srcLink,calories,ingredients) {
  this.id = id;
  this.title = title;
  this.imageUrl = imageUrl;
  this.srcLink = srcLink;
  this.calories = calories
  this.ingredients = ingredients
}

function createObject(data) {
  const recipeArr = [];
  let recipe;
  data.forEach(el => {
    recipe = new Recipe(
      el.recipe.uri,
      el.recipe.label,
      el.recipe.image,
      el.recipe.shareAs,
      el.recipe.calories,
      el.recipe.ingredients,
    );
    recipeArr.push(recipe);
  });
  return recipeArr;
  // for (let i = 0; i < data.meals.length; i++) {
  //   for (let j = 1; j < 21; j++) {
  //     const recipeList = data.meals[i];
  //     j = j.toString()
  //     ingredient = recipeList.strIngredient+j
  //     console.log(ingredient);
  //     recipe = new Recipe(
  //       recipeList.idMeal,
  //       recipeList.strMeal,
  //       recipeList.strInstructions,
  //       recipeList.strMealThumb,
  //       recipeList.strYoutube
  //     );
  //   }
  // }
}

exports.getAPI = async search => {
  const app_ID = process.env.APP_ID;
  const app_KEY = process.env.APP_KEY;
  await axios
    .get(
      `https://api.edamam.com/search?q=${search}&app_id=${app_ID}&app_key=${app_KEY}&count=1`
    )
    .then(response => {
      const data = response.data.hits;
      recipeArr = createObject(data);
    });
  return recipeArr;
};
