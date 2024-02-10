const express = require("express")
const router = express.Router()

const ARM_WORKOUTS = [{message:"alive"}]

router.get("/",(req,res)=>{
  res.json(ARM_WORKOUTS)
}) 

module.exports = router