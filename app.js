//Dependencies 

const cors = requrie("cors");
const express = require("express");

//Configuration
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Colors App")
});

//Export
module.exports = app;