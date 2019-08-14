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

exports.createObject = data => {
  let recipe = new RecipeConstructor(
    data.idMeal,
    data.strMeal,
    data.strCategory,
    data.strArea,
    data.strInstructions,
    data.strMealThumb,
    data.strYoutube
  );
  recipeArr.push(recipe);
  return recipeArr;
};

exports.getRecipe = () => {
 let html;
  for (let i = 0; i < recipeArr.length; i++) {
    html += `<h1>${recipeArr[i].title}</h1>
    <img src='${recipeArr[i].imageUrl}'>
    <p>${recipeArr[i].instructions}</p>
    <a href='${recipeArr[i].videoUrl}>Watch how to cook ${recipeArr[i].title}</a>`;
  
  }
  return html
};
