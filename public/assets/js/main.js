let data;
let recipeList;
let recipeCard = "";

async function callAPI() {
  let search = document.querySelector("#find-recipe").value;
  await axios.get(`/search-recipe/:${search}`).then(response => {
    data = response.data;
    transformData(data);
    window.location = "/recipe.html";
  });
}

function starRating() {
  let i = 0;
  for (i <= 5; i++; ) {
    document.getElementsByClassName(
      ".star-rating"
    ).innerHTML = `<span class='star-container'><img src='public/assets/img/star.png'></span>`;
  }
}

function transformData(data) {
  data.forEach(el => {
    recipeCard += `<form class='recipe-container'><h5 class='recipe-id' hidden>${el.id}</h5><br>
    <h4 class='recipe-title'>${el.title}</h4><br>
    <img  class='recipe-image' src="${el.imageUrl}"/><br>
    <a class='recipe-source-link' href='${el.srcLink}'>Source Link</a><br>
    <div class='star-rating'></div>
    <p class='ingredients'hidden>${el.ingredients}</p>
    <button class='btn' onclick='getRecipeCard()'>Save Recipe</button><br>
    
    </form>
    `;

    return localStorage.setItem("recipeList", recipeCard);
  });
}

function getRecipeCard() {
  let card = {};
  card.id = "";
  card.title = "";
  card.image = "";
  card.srcLink = "";
  let recipeId = document.querySelector(".recipe-id").textContent;
  let recipeTitle = document.querySelector(".recipe-title").textContent;
  let recipeImage = document.querySelector(".recipe-image").src;
  let recipeSrcLink = document.querySelector(".recipe-source-link").href;

  card = {
    id: recipeId,
    title: recipeTitle,
    image: recipeImage,
    srcLink: recipeSrcLink
  };
  axios.post("/save-recipe", card);
}

function displayRecipe() {
  document.getElementById("recipe-list").innerHTML = localStorage.getItem(
    "recipeList"
  );
}
