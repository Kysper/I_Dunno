const express = require("express");
const path = require("path");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/", (req, res) => {
  res.sendFile(path.join(`${__dirname} /index.html`));
});

// router.get('/',auth, (req,res)=>{
//     res.sendFile(path.join(__dirname, '../../../', '/public/index.html' ))
// })

module.exports = router;
