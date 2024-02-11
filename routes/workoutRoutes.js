const express = require("express")
const router = express.Router()
const  {
  chestWorkout,
  armsWorkout,
  absWorkout,
  legsWorkout,
  backWorkout,
  fullBodyWorkout,
allMenworkouts
} = require("../plans/menPlan")
const allFemaleWorkouts = require("../plans/femalePlan")



router.get("/chest",(req,res)=>{
  res.json(chestWorkout)
}) 
router.get("/arms",(req,res)=>{
  res.json(armsWorkout)
})  
router.get("/abs",(req,res)=>{
  res.json(absWorkout)
}) 
router.get("/legs",(req,res)=>{
  res.json(legsWorkout)
}) 
router.get("/chest",(req,res)=>{
  res.json(chestWorkout)
}) 
router.get("/men/fullbody",(req,res)=>{
  res.json(fullBodyWorkout)
})  
router.get("/men/workouts",(req,res)=>{
  res.json(allMenworkouts)
}) 
router.get("/female",(req,res)=>{
  res.json(allMenworkouts)
}) 

module.exports = router