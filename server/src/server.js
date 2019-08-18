const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routers/user");
const homeRouter = require("./routers/home");
const recipesRouter = require("./routers/recipes");
const port = process.env.PORT || 8080;
require("./db/db");
const app = express();

app.use(express.static("public"));
app.use(express.static("js"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRouter);
app.use(homeRouter);
app.use(recipesRouter);

app.listen(port, () => {
  console.log(`Server is alive on port: ${port}`);
});
