//Dependencies 
const cors = require("cors");
const express = require("express");

//Configuration
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Colors Routes
const colorController = require("./controllers/colorsController.js");
app.use("/colors", colorController);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to Colors App")
});

//404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//Export
module.exports = app;