const armsWorkout = [
  {
    exercise: "Push-Ups",
    description: "Targets chest, shoulders, and triceps. Keep your body in a straight line and lower until your elbows are at a 90-degree angle.",
    tools: "No equipment needed, but you can use a mat for comfort."
  },
  {
    exercise: "Bicep Curls",
    description: "Targets biceps. Hold dumbbells with palms facing up, curl weights towards shoulders, and slowly lower back down.",
    tools: "Dumbbells"
  },
  // Add four more arm exercises here
];

const absWorkout = [
  {
    exercise: "Crunches",
    description: "Targets upper abs. Lie on your back with knees bent, lift shoulders off the floor, and engage core as you crunch upwards.",
    tools: "No equipment needed, but you can use a mat for comfort."
  },
  {
    exercise: "Plank",
    description: "Targets entire core. Keep your body in a straight line from head to heels, engaging core muscles throughout.",
    tools: "No equipment needed, but you can use a mat for comfort."
  },
  // Add four more ab exercises here
];

const backWorkout = [
  {
    exercise: "Pull-Ups",
    description: "Targets upper back and biceps. Hang from a bar with hands shoulder-width apart, pull body upwards until chin reaches bar.",
    tools: "Pull-up bar"
  },
  {
    exercise: "Dumbbell Rows",
    description: "Targets middle back. Stand with a dumbbell in each hand, hinge forward at the hips, and row dumbbells towards waist.",
    tools: "Dumbbells"
  },
  // Add four more back exercises here
];

const buttWorkout = [
  {
    exercise: "Squats",
    description: "Targets glutes, quads, and hamstrings. Stand with feet hip-width apart, lower hips back and down as if sitting into a chair, then return to standing.",
    tools: "No equipment needed, but you can use a barbell for added resistance."
  },
  {
    exercise: "Lunges",
    description: "Targets glutes and quads. Step forward with one foot, lower hips until both knees are bent at 90 degrees, then push back to starting position.",
    tools: "No equipment needed, but you can use dumbbells for added resistance."
  },
  // Add four more butt exercises here
];

const legsWorkout = [
  {
    exercise: "Deadlifts",
    description: "Targets hamstrings, glutes, and lower back. Stand with feet hip-width apart, hold a barbell with an overhand grip, hinge at hips to lower weights towards the floor, then return to standing.",
    tools: "Barbell"
  },
  {
    exercise: "Leg Press",
    description: "Targets quads, hamstrings, and glutes. Sit in a leg press machine, push weight away until legs are fully extended, then slowly lower weight back down.",
    tools: "Leg press machine"
  },
  // Add four more leg exercises here
];

const allFemaleWorkouts = {
  arms: armsWorkout,
  abs: absWorkout,
  back: backWorkout,
  butt: buttWorkout,
  legs: legsWorkout
};

module.exports= allFemaleWorkouts;
