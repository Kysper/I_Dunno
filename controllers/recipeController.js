const recipeArr = [];
function Recipe(id, title, instructions, imageUrl, videoUrl) {
  this.id = id;
  this.title = title;
  this.instructions = instructions;
  this.imageUrl = imageUrl;
  this.videoUrl = videoUrl;
}

exports.createObject = data => {
  let recipe = new Recipe(
    data.idMeal,
    data.strMeal,
    data.strInstructions,
    data.strMealThumb,
    data.strYoutube
  );
 recipeArr.push(recipe);
};
i=0;
exports.getRecipe = () => {

  let recipe = '';
  if(i < recipeArr.length){
  recipeArr.forEach(cur=>{
 recipe += `<div>
  <h2>${cur.title}</h2>
  <img src='${cur.imageUrl}'>
  <p>${cur.instructions}</p>
  <a href="${cur.videoUrl}">Watch how to make ${cur.title}</a>
  </div>`
})
i++;

 this.getRecipe(); 
 return recipe
}
return
};

/* <p>${cur.instructions}</p> */
