const express = require("express");
const router = express.Router();

const { getCharById } = require("../controllers/getCharById");

router.get("/:id", (req, res) => {
  const { id } = req.params;

  try {
    const character = getCharById(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
});

module.exports = router;
