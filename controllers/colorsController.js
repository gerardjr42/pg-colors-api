//controllers/colorsController.js
const express = require("express");
const colors = express.Router();

//Require our query for colors
const { getAllColors, getColor, createColor, deleteColor, updateColor } = require("../queries/color");

//Requre our validations for colors
const { checkName, checkBoolean } = require("../validations/checkColors.js");

//Index
colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  if(allColors[0]) {
    res.status(200).json(allColors);
  } else {
    res.status(500).json({error: "server error"});
  }
});

//Show
colors.get("/:id", async (req, res) => {
  const { id } = req.params;
  const color = await getColor(id);
  if(color) {
    res.json(color);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

//Create
colors.post("/", checkName, checkBoolean, async (req, res) => {
  const color = await createColor(req.body);
  res.json(color);
});

//Delete
colors.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedColor = await deleteColor(id)
  if (deletedColor.id) {
    res.status(200).json(deletedColor);
  } else {
    res.status(400).json("Color not found");
  }
});

//Update
colors.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedColor = await updateColor(id, req.body);
  res.status(200).json(updatedColor);
});

module.exports = colors;