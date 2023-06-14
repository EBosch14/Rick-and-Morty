const express = require("express");
const router = express.Router();
const { validateUser } = require("../controllers/validateUser");

router.get("/login", (req, res) => {
  const { user, pass } = req.query;
  try {
    const validate = validateUser(user, pass);
    res.status(200).json(validate);
    //if (validate.access) res.status(200).json(validate);
    //else res.status(422).json(validate);
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
});

module.exports = router;
