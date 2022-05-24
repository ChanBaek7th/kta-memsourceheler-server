const express = require("express");
const Word = require("../models/word");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const words = await Word.findAll();
      res.json(words);
    } catch (err) {
      console.error(err);
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const word = await Word.create({
        id: req.body.id,
        ja: req.body.ja,
        en: req.body.en,
      });
      console.log(word);
      res.status(201).json(word);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
