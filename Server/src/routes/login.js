const express = require("express");
const router = express.Router();
const { validateUser } = require("../controllers/validateUser");

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  try {
    const validate = validateUser(username, password);
    if (validate.access) res.status(200).json(validate);
    else res.status(401).json("Incorrect Credentials");
  } catch (error) {
    res.status(410).json({ err: error.message });
  }
});

module.exports = router;
