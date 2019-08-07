const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/search-recipe", async (req, res) => {
    const query = req.query.query
    console.log(query)
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${req.query.query}`;
    try {
        return await axios.get(url).then(response=>{
           const data = response.data
           console.log(data.meals)
        }).catch(error =>{
            console.log(error)
        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
