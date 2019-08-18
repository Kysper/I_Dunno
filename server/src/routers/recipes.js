const express = require("express");
const axios = require("axios");
const router = express.Router();
const recipeController = require("../../../controllers/recipeController");
const Recipe = require("../models/Recipe");
const auth = require("../middleware/auth");
router.get("/search-recipe/", async (req, res, next) => {
  let search = req.query.search;
  try {
   await axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(response => {
        const data = response.data;
        res.json(data);
      });
      res.end();
  } catch (error) {
    console.log(error)
  res.end()
  }
});

//Authentication Endpoints

router.post("/save-recipe/:id", auth, (req, res) => {});

module.exports = router;
// data.meals.forEach(element => {
//   res.send(recipeController.createObject(element)); 
//  });