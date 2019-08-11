const express = require("express");
const axios = require("axios");
const router = express.Router();
const recipeController = require("../middleware/controllers/recipeController");
// const Recipe = require('../models/Recipe')
// const auth = require("../middleware/auth");
router.get("/search-recipe", async (req, res, next) => {
  try {
    let query = req.query.search;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    return await axios
      .get(url)
      .then(response => {
        const data = response.data;

        recipeController.getObject(data);

        res.status(200);
        res.redirect("/display-recipe");
      })
      .catch(error => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
});

router.get("/display-recipe", (req,res)=>{
  console.log(recipeController.getRecipe());
  res.send(recipeController.getRecipe());
});

// router.post("/save-recipe/:id", (req, res) => {});

module.exports = router;
