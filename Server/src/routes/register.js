const express = require('express')
const router = express.Router()

const {validateRegister} = require('../controllers/validateRegister')

router.post('/register', (req,res) => {
  console.log(req.body);
  const {email, user, pass} = req.body
  try {
    const result = validateRegister(email, user, pass)
    if(result) res.status(200).json({validate : result})
    else res.status(401).json({validate : result})
  } catch (err) {
    res.status(410).json({err})
  }
})

module.exports = router