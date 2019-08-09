const express = require("express");
const axios = require("axios");
const router = express.Router();
const RecipeConstructor = require("../middleware/recipeConstructor");

let recipe = {};
router.get("/search-recipe", async (req, res, next) => {
  console.log("I Work");
  let query = req.query.search;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  query = "";
  try {
    return await axios
      .get(url)
      .then(response => {
        data = response.data;
        if (data.meals == "") {
          return;
        } else {
          recipe = new RecipeConstructor(
            data.meals.idMeal,
            data.meals.strMeal,
            data.meals.idCategory,
            data.meals.strArea,
            data.meals.strInstructions,
            data.meals.strMealThumb,
            data.meals.strYoutube
          );

          res.status(200);
          res.redirect("/display-recipe");
          return data;
        }
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
});

router.get("/display-recipe", (req, res, next) => {
  res.send(recipe);

  next(),
    (req, res) => {
      res.redirect("/");
    };
});

router.post("/save-recipe/:id", (req, res) => {});

module.exports = router;
