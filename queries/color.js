//queries/color.js
const db = require("../db/dbConfig.js");

//Asyn function for sql query
const getAllColors = async () => {
  try {
    const allColors = await db.any("SELECT * FROM colors");
    return allColors;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllColors };