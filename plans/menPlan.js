const chestWorkout = [
  { exercise: "Barbell Bench Press", tool: "Barbell", safetyTips: "Use a spotter, maintain proper form, and control the weight throughout the movement." },
  { exercise: "Dumbbell Flyes", tool: "Dumbbells", safetyTips: "Keep elbows slightly bent, and avoid using excessive weight to prevent strain." },
  { exercise: "Incline Dumbbell Press", tool: "Dumbbells, Incline Bench", safetyTips: "Adjust the bench to a comfortable incline, and keep core engaged." },
  { exercise: "Cable Crossover", tool: "Cable Machine", safetyTips: "Keep shoulders back, chest up, and avoid jerking the weight." },
  { exercise: "Push-Ups", tool: "Bodyweight", safetyTips: "Maintain a straight line from head to heels, and breathe properly throughout the movement." },
  { exercise: "Machine Chest Press", tool: "Chest Press Machine", safetyTips: "Adjust the seat and handles according to your comfort, and avoid locking out elbows at the top of the movement." }
];

const armsWorkout = [
  { exercise: "Barbell Curl", tool: "Barbell", safetyTips: "Keep elbows close to the body and avoid swinging the weight." },
  { exercise: "Tricep Dips", tool: "Parallel Bars", safetyTips: "Lower yourself until your elbows are at 90 degrees, and avoid locking out your elbows at the top." },
  { exercise: "Dumbbell Hammer Curl", tool: "Dumbbells", safetyTips: "Maintain a neutral wrist position and control the weight throughout the movement." },
  { exercise: "Skull Crushers", tool: "E-Z Curl Bar", safetyTips: "Keep elbows stable and avoid lowering the weight too far behind the head." },
  { exercise: "Preacher Curls", tool: "Preacher Bench, Barbell/Dumbbells", safetyTips: "Adjust the bench to the appropriate height, and focus on controlled movements." },
  { exercise: "Tricep Rope Pushdown", tool: "Cable Machine", safetyTips: "Keep elbows close to the body and fully extend arms at the bottom of the movement." }
];

const absWorkout = [
  { exercise: "Hanging Leg Raises", tool: "Pull-Up Bar", safetyTips: "Control the movement and avoid swinging the legs for momentum." },
  { exercise: "Russian Twists", tool: "Weight Plate/Medicine Ball", safetyTips: "Keep back straight and engage core throughout the movement." },
  { exercise: "Plank", tool: "Bodyweight", safetyTips: "Maintain a straight line from head to heels and avoid sagging hips." },
  { exercise: "Cable Crunches", tool: "Cable Machine", safetyTips: "Use a moderate weight, and focus on contracting the abs with each repetition." },
  { exercise: "Ab Wheel Rollouts", tool: "Ab Wheel", safetyTips: "Start with short range of motion and gradually progress to full extension." },
  { exercise: "Mountain Climbers", tool: "Bodyweight", safetyTips: "Keep hips low and core engaged throughout the movement." }
];

const legsWorkout = [
  { exercise: "Barbell Squats", tool: "Barbell", safetyTips: "Keep chest up, back straight, and knees aligned with toes." },
  { exercise: "Deadlifts", tool: "Barbell", safetyTips: "Maintain a neutral spine, engage core, and lift with legs, not back." },
  { exercise: "Leg Press", tool: "Leg Press Machine", safetyTips: "Adjust seat and foot position according to comfort, and avoid locking out knees at the top." },
  { exercise: "Lunges", tool: "Dumbbells", safetyTips: "Step forward with proper alignment, keeping front knee over ankle." },
  { exercise: "Leg Curls", tool: "Leg Curl Machine", safetyTips: "Control the movement and avoid using excessive weight to prevent strain." },
  { exercise: "Calf Raises", tool: "Calf Raise Machine", safetyTips: "Maintain control throughout the movement and avoid locking out knees at the top." }
];

const backWorkout = [
  { exercise: "Pull-Ups", tool: "Pull-Up Bar", safetyTips: "Maintain proper grip and avoid swinging for momentum." },
  { exercise: "Bent Over Rows", tool: "Barbell/Dumbbells", safetyTips: "Keep back flat, chest up, and pull towards the lower abdomen." },
  { exercise: "Lat Pulldowns", tool: "Lat Pulldown Machine", safetyTips: "Use a grip slightly wider than shoulder-width and avoid using momentum to pull the weight." },
  { exercise: "T-Bar Rows", tool: "T-Bar Row Machine", safetyTips: "Keep back straight and engage core throughout the movement." },
  { exercise: "Single Arm Dumbbell Rows", tool: "Dumbbells, Bench", safetyTips: "Keep back flat, chest up, and pull towards the hip." },
  { exercise: "Hyperextensions", tool: "Hyperextension Bench", safetyTips: "Maintain a neutral spine and avoid hyperextending at the top." }
];

const fullBodyWorkout = [
  { exercise: "Squats", tool: "Barbell", safetyTips: "Maintain proper form and depth, and engage core throughout the movement." },
  { exercise: "Deadlifts", tool: "Barbell", safetyTips: "Focus on proper form and engage core to protect the lower back." },
  { exercise: "Bench Press", tool: "Barbell", safetyTips: "Use a spotter and maintain control throughout the movement." },
  { exercise: "Pull-Ups", tool: "Pull-Up Bar", safetyTips: "Engage core and avoid swinging for momentum." },
  { exercise: "Overhead Press", tool: "Barbell/Dumbbells", safetyTips: "Keep back straight and avoid arching excessively." },
  { exercise: "Plank", tool: "Bodyweight", safetyTips: "Maintain a straight line from head to heels and engage core throughout." }
]; 

cont allMenworkouts = {
  chest:chestWorkout,
  arms:armsWorkout,
  abs:absWorkout,
  legs: legsWorkout,
  back: backWorkout,
  fullbody:fullBodyWorkout
}

// Export all workout plans
module.exports = {
  chestWorkout,
  armsWorkout,
  absWorkout,
  legsWorkout,
  backWorkout,
  fullBodyWorkout,
  allMenworkouts
};
