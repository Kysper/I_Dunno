function Recipe(id, title, instructions, imageUrl, videoUrl) {
  this.id = id;
  this.title = title;
  this.instructions = instructions;
  this.imageUrl = imageUrl;
  this.videoUrl = videoUrl;
}

exports.createObject = data => {
  let recipe;
   data.meals.forEach(element=>{
   recipe = new Recipe(
      element.idMeal,
      element.strMeal,
      element.strInstructions,
      element.strMealThumb,
      element.strYoutube
    );
  });
  return recipe;
};
