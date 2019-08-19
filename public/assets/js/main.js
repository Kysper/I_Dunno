async function callAPI() {
  let recipeCard;
  let search = document.querySelector("#find-recipe").value;
  await axios.get(`/search-recipe/:${search}`).then(response => {
    const data = response.data;
    data.forEach(el => {
      recipeCard = `<h5 hidden>${el.id}</h5>
                      <h2>${el.title}</h2>
                      <img src="${el.imageUrl}"/>
                      <p hidden>${el.instructions}</p><br><br>
                      <a href='${el.videoUrl}'>Watch how to make ${
        el.title
      } on Youtube</a>`;
      // return recipeCard;
      document.getElementById("recipe-list").innerHTML += recipeCard;
    });
  });
}
