const axios = require("axios");

function Recipe(id, title, instructions, imageUrl, videoUrl) {
  this.id = id;
  this.title = title;
  this.instructions = instructions;
  this.imageUrl = imageUrl;
  this.videoUrl = videoUrl;
}

function createObject(data) {
  const recipeArr = [];
  let recipe;
  for (i = 0; i < data.meals.length; i++) {
    recipe = new Recipe(
      data.meals[i].idMeal,
      data.meals[i].strMeal,
      data.meals[i].strInstructions,
      data.meals[i].strMealThumb,
      data.meals[i].strYoutube
    );
    recipeArr.push(recipe);
  }
  return recipeArr;
}

exports.getAPI = async search => {
  await axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(response => {
      const data = response.data;
      recipeArr = createObject(data);
    });
  return recipeArr;
};
