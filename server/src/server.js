const express = require('express');
const bodyParser = require('body-parser')
const userRouter = require('./routers/user')
const port = process.env.PORT
require('./db/db')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(userRouter)

app.listen(port, () =>{
console.log(`Server is alive on port: ${port}`)
})