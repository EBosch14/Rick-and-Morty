const express = require('express')
const router = express.Router()

const {validateRegister} = require('../controllers/validateRegister')

router.post('/register', (req,res) => {
  console.log(req.body);
  const {email, username, password} = req.body
  try {
    const result = validateRegister(email, username, password)
    if(result) res.status(200).json({register : result})
    else res.status(401).json("This username is already exist")
  } catch (err) {
    res.status(410).json({err})
  }
})

module.exports = router