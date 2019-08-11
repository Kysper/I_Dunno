const recipeArr = [];
function RecipeConstructor(
  id,
  title,
  category,
  area,
  instructions,
  imageUrl,
  videoUrl
) {
  this.id = id;
  this.title = title;
  this.category = category;
  this.area = area;
  this.instructions = instructions;
  this.imageUrl = imageUrl;
  this.videoUrl = videoUrl;
}

exports.getObject = data => {
  // console.log(data);
  data.meals.forEach(element=>{
    
    let recipe = new RecipeConstructor(
      element.idMeal,
      element.strMeal,
      element.strCategory,
      element.strArea,
      element.strInstructions,
      element.strMealThumb,
      element.strYoutube
    );
    recipeArr.push(recipe);
    console.log(recipeArr)
  })
  this.getRecipe(recipeArr);
};

exports.getRecipe= () => {
  return `
  <card class='container'>
  <h1>${recipeArr[0].id}</h1>
  <img src='${recipeArr[0].imageUrl}'
  <
  </card>`
};
