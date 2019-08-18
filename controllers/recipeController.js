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
 return recipe
};
