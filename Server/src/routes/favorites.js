const express = require("express");
const router = express.Router();

const { addFavorites } = require("../controllers/addFavorites");
const { deleteFavorites } = require("../controllers/deleteFavorites");

router.post("/fav", (req, res) => {
  const character = req.body;
  try {
    const allFavorites = addFavorites(character);
    res.status(200).json(allFavorites);
  } catch (error) {
    res.status(422).json({ err: error.message });
  }
});

router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  try {
    const allFavorites = deleteFavorites(id)
    res.status(200).json(allFavorites)
  } catch (error) {
    res.status(422).json({ err: error.message });
  }
});

module.exports = router;
