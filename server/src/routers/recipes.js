const express = require("express");
const axios = require("axios");
const router = express.Router();
const recipeController = require("../../../controllers/recipeController");
const Recipe = require("../models/Recipe");
const auth = require("../middleware/auth");
const path = require("path");

let recipeArr = [];

router.get(`/search-recipe/:search`, async (req, res, next) => {
  const search = req.params.search.split(":").pop();
  recipeArr = await recipeController.getAPI(search);
  res.send(recipeArr);
});

//Authentication Endpoints

router.post("/save-recipe", (req, res) => {
const card = req.body;
console.log(card)
});

router.post("/recipe.html", (req, res) => {
  
});

module.exports = router;
