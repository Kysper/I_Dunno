const express = require("express");
const axios = require("axios");
const router = express.Router();
const recipeController = require("../../../controllers/recipeController");
// const Recipe = require('../models/Recipe')
const auth = require("../middleware/auth");
router.get("/search-recipe", async (req, res, next) => {
  try {
    let query = req.query.search;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    return await axios
      .get(url)
      .then(async response => {
        const data = response.data;
        data.meals.forEach(element => {
          recipeController.createObject(element);
        });
        res.redirect(307,"/display-recipe");
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
});

router.get("/display-recipe", (req, res) => {
  
  res.send(recipeController.getRecipe())
});

//Authentication Endpoints

router.post("/save-recipe/:id", auth, (req, res) => {});

module.exports = router;
