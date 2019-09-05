let data;
let recipeList;
let recipeCard = "";
async function checkLogin() {
  await axios.get('/users/login').then(response => {
    console.log(response.data)
  });
}

async function callAPI() {
  let search = document.querySelector("#find-recipe").value;
  await axios.get(`/search-recipe/:${search}`).then(response => {
    data = response.data;
    transformData(data);
    window.location = "/recipe.html";
  });
}

function transformData(data) {
  data.forEach(el => {
    recipeCard += `<form class='recipe-container' method='post' action='/save-recipe/:id'><h5 class='recipe-id' hidden>${el.id}</h5><br>
        <h4 class='recipe-title'>${el.title}</h4><br>
        <img  class='recipe-image' src="${el.imageUrl}"/><br>
        <p class='recipe-instructons' hidden>${el.instructions}</p><br>
        <a class='recipe-youtube-link' href='${el.videoUrl}'>Watch how to make ${el.title} on Youtube</a>
        <button class='btn' >Save Recipe</button></form>
        `;
    return localStorage.setItem("recipeList", recipeCard);
  });
}

function displayRecipe() {
  document.getElementById("recipe-list").innerHTML = localStorage.getItem(
    "recipeList"
  );
}
