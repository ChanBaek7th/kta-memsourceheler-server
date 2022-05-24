const express = require("express");
const Word = require("../models/word");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const words = await Word.findAll();
    res.render("sequelize", { words });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
