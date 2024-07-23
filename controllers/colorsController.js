//controllers/colorsController.js
const express = require("express");
const colors = express.Router();

//Index
colors.get("/", (req, res) => {
  res.json({ status: "ok"});
});

module.exports = colors;