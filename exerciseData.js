const restTime = 45;
const exerciseData = {
  Arms: {
    "Easy 1": [
      {
        name: "Bicep Curls",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/easy1_bicepCurl.gif"),
        kcal: 4,
        time: 30,
      },
      {
        name: "Hammer Curls",
        imageSource: require("./assets/ArmsExercises/easy1_hammerCurl.gif"),
        repetitionsOrTime: "x12",
        kcal: 5,
        time: 45,
      },
      {
        name: "Palms-Up Wrist Curls",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/ArmsExercises/easy1_wristCurl.gif"),
        kcal: 3,
        time: 40,
      },
      {
        name: "Push Ups",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/easy1_pushUp.gif"),
        kcal: 2,
        time: 20,
      },
      {
        name: "Tricep Kickbacks",
        repetitionsOrTime: "x12",
        imageSource: require("./assets/ArmsExercises/easy1_tricepKickback.gif"),
        kcal: 3,
        time: 50,
      },

      // Add more exercises for Easy 1 level...
    ],
    "Easy 2": [
      {
        name: "Band Bicep Curls",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/easy1_bandBicepCurls.gif"),
        kcal: 4,
        time: 45,
      },
      {
        name: "Concentration Curls",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/concentrationCurls.gif"),
        kcal: 3,
        time: 40,
      },
      {
        name: "Tricep Behind Back",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/easy1_tricepBehindBack.gif"),
        kcal: 4,
        time: 50,
      },
      {
        name: "Mountain Climber",
        repetitionsOrTime: "x16",
        imageSource: require("./assets/ArmsExercises/easy1_mountainClimber.gif"),
        kcal: 10,
        time: 30,
      },
      {
        name: "Diamond Push Ups",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/easy1_diamondPushUp.gif"),
        kcal: 3,
        time: 40,
      },
      {
        name: "Palms-Down Wrist Curls",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/easy1_palmsDownWristCurl.gif"),
        kcal: 3,
        time: 40,
      },
    ],
    "Medium 1": [
      {
        name: "Reverse-Grip EZ Bar Curl",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/medium_ReverseGripBarCurl.gif"),
        kcal: 5,
        time: 60,
      },
      {
        name: "Tate Press",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/medium_tatePress.gif"),
        kcal: 4,
        time: 50,
      },
      {
        name: "Prone Dumbbell Spider Curl",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/medium_ProneDumbbellSpiderCurl.gif"),
        kcal: 4,
        time: 40,
      },
      {
        name: "Skull Crushers",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/medium_skullcrushers.gif"),
        kcal: 3,
        time: 40,
      },
      {
        name: "Palms-Down Wrist Curls",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/ArmsExercises/easy1_palmsDownWristCurl.gif"),
        kcal: 3,
        time: 40,
      },
      {
        name: "Diamond Push Ups",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/easy1_diamondPushUp.gif"),
        kcal: 3,
        time: 40,
      },
    ],
    "Medium 2": [
      {
        name: "Close-Grip Bench Press",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/closeGripBenchPress.gif"),
        kcal: 5,
        time: 40,
      },
      {
        name: "Concentration Curl",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/concentrationCurls.gif"),
        kcal: 5,
        time: 50,
      },
      {
        name: "Standing Overhead Barbell Triceps Extension",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/barbellTricepsExtension.gif"),
        kcal: 4,
        time: 50,
      },
      {
        name: "Reverse Barbell Curl",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/reverseBarbellCurl.gif"),
        kcal: 3,
        time: 40,
      },
      {
        name: "Skull Crushers",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/medium_skullcrushers.gif"),
        kcal: 3,
        time: 40,
      },
      {
        name: "Mountain Climber",
        repetitionsOrTime: "x24",
        imageSource: require("./assets/ArmsExercises/easy1_mountainClimber.gif"),
        kcal: 10,
        time: 30,
      },
    ],
    "Hard 1": [
      {
        name: "Tricep Dips",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/dips.gif"),
        kcal: 5,
        time: 40 + restTime,
      },
      {
        name: "Military Press",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/militaryPress.gif"),
        kcal: 5,
        time: 45 + restTime,
      },
      {
        name: "Zottman Curls",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/zottmanCurl.gif"),
        kcal: 4,
        time: 50 + restTime,
      },
      {
        name: "Reverse Barbell Curl",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/reverseBarbellCurl.gif"),
        kcal: 3,
        time: 40 + restTime,
      },
      {
        name: "Skull Crushers",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/medium_skullcrushers.gif"),
        kcal: 3,
        time: 40 + restTime,
      },
      {
        name: "Hammer Curls",
        imageSource: require("./assets/ArmsExercises/easy1_hammerCurl.gif"),
        repetitionsOrTime: "x20",
        kcal: 6,
        time: 60 + restTime,
      },

      {
        name: "Push Ups",
        repetitionsOrTime: "x25",
        imageSource: require("./assets/ArmsExercises/easy1_pushUp.gif"),
        kcal: 6,
        time: 50 + restTime,
      },
    ],

    "Hard 2": [
      {
        name: "Decline Push Ups",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/declinePushUp.gif"),
        kcal: 5,
        time: 40 + restTime,
      },
      {
        name: "Bicep Curl",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/ArmsExercises/easy1_bicepCurl.gif"),
        kcal: 5,
        time: 45 + restTime,
      },
      {
        name: "Lying Tricep Extensions",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ArmsExercises/lyingTricepExtensions.gif"),
        kcal: 3,
        time: 40 + restTime,
      },
      {
        name: "Zottman Curls",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/zottmanCurl.gif"),
        kcal: 4,
        time: 50 + restTime,
      },

      {
        name: "Skull Crushers",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/medium_skullcrushers.gif"),
        kcal: 3,
        time: 40 + restTime,
      },
      {
        name: "Tricep Kickbacks",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/ArmsExercises/easy1_tricepKickback.gif"),
        kcal: 3,
        time: 50 + restTime,
      },
      {
        name: "Push Ups",
        repetitionsOrTime: "x25",
        imageSource: require("./assets/ArmsExercises/easy1_pushUp.gif"),
        kcal: 6,
        time: 50 + restTime,
      },
      {
        name: "Prone Dumbbell Spider Curl",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ArmsExercises/medium_ProneDumbbellSpiderCurl.gif"),
        kcal: 4,
        time: 40 + restTime,
      },
    ],
    // Add more levels and exercises for Arms...
  },
  Legs: {
    "Easy 1": [
      {
        name: "Jump Squats",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/LegsExercises/jumpSquat.gif"),
        kcal: 8,
        time: 40 + restTime,
      },
      {
        name: "Glute Bridges",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/gluteBridge.gif"),
        kcal: 5,
        time: 40 + restTime,
      },
      {
        name: "Leg rises",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/legRise.gif"),
        kcal: 5,
        time: 30 + restTime,
      },
      {
        name: "Step Ups",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/stepUps.gif"),
        kcal: 8,
        time: 60 + restTime,
      },
    ],
    "Easy 2": [
      {
        name: "Squats",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/squat.gif"),
        kcal: 8,
        time: 30 + restTime,
      },
      {
        name: "Donkey Kick",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/donkeyKick.gif"),
        kcal: 4,
        time: 45 + restTime,
      },
      {
        name: "Standing Calf Raises",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/standingCalfRaises.gif"),
        kcal: 5,
        time: 50 + restTime,
      },
      {
        name: "Clamshells",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/clamShell.gif"),
        kcal: 8,
        time: 30 + restTime,
      },
      {
        name: "Seated Leg Press",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/seatedLegPress.gif"),
        kcal: 8,
        time: 40 + restTime,
      },
    ],

    "Medium 1": [
      {
        name: "Goblet Squats",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/gobletSquat.gif"),
        kcal: 8,
        time: 40 + restTime,
      },
      {
        name: "Bulgarian Split Squats",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/bulgarianSquat.gif"),
        kcal: 4,
        time: 45 + restTime,
      },
      {
        name: "Box Jumps",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/boxJump.gif"),
        kcal: 10,
        time: 60 + restTime,
      },
      {
        name: "Standing Calf Raises (Dumbells)",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/standingCalfRaisesDumbells.gif"),
        kcal: 7,
        time: 40 + restTime,
      },
      {
        name: "Leg Curl Seated",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/legCurlSeated.gif"),
        kcal: 7,
        time: 45 + restTime,
      },
    ],
    "Medium 2": [
      {
        name: "Squats (Barbell)",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/squatBarbell.gif"),
        kcal: 8,
        time: 40 + restTime,
      },
      {
        name: "Romanian Deadlifts",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/romanianDeadlifts.gif"),
        kcal: 6,
        time: 45 + restTime,
      },
      {
        name: "Dumbbell Lunges",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/dumbbellLunge.gif"),
        kcal: 10,
        time: 60 + restTime,
      },
      {
        name: "Donkey Kick",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/donkeyKick.gif"),
        kcal: 4,
        time: 45 + restTime,
      },
      {
        name: "Leg rises",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/legRise.gif"),
        kcal: 5,
        time: 30 + restTime,
      },
    ],
    "Hard 1": [
      {
        name: "Goblet Squats",
        repetitionsOrTime: "x25",
        imageSource: require("./assets/LegsExercises/gobletSquat.gif"),
        kcal: 8,
        time: 50 + restTime,
      },
      {
        name: "Deadlifts",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/deadlift.gif"),
        kcal: 10,
        time: 45 + restTime,
      },
      {
        name: "Leg Press",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/legPress.gif"),
        kcal: 8,
        time: 40 + restTime,
      },
      {
        name: "Bulgarian Split Squats",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/bulgarianSquat.gif"),
        kcal: 6,
        time: 60 + restTime,
      },
      {
        name: "Standing Calf Raises (Dumbells)",
        repetitionsOrTime: "x25",
        imageSource: require("./assets/LegsExercises/standingCalfRaisesDumbells.gif"),
        kcal: 8,
        time: 60 + restTime,
      },
      {
        name: "Leg Curl Seated",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/legCurlSeated.gif"),
        kcal: 7,
        time: 45 + restTime,
      },
      {
        name: "Box Jumps",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/boxJump.gif"),
        kcal: 10,
        time: 60 + restTime,
      },
    ],
    "Hard 2": [
      {
        name: "Romanian Deadlifts",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/romanianDeadlifts.gif"),
        kcal: 6,
        time: 60 + restTime,
      },
      {
        name: "Dumbbell Lunges",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/dumbbellLunge.gif"),
        kcal: 10,
        time: 70 + restTime,
      },
      {
        name: "Squats (Barbell)",
        repetitionsOrTime: "x25",
        imageSource: require("./assets/LegsExercises/squatBarbell.gif"),
        kcal: 8,
        time: 60 + restTime,
      },
      {
        name: "Donkey Kick",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/donkeyKick.gif"),
        kcal: 4,
        time: 60 + restTime,
      },
      {
        name: "Leg Curl Lying",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/legCurlLying.gif"),
        kcal: 7,
        time: 50 + restTime,
      },
      {
        name: "Leg Curl Seated",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/legCurlSeated.gif"),
        kcal: 7,
        time: 50 + restTime,
      },
      {
        name: "Kettlebell Swing",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/kettlebellSwing.gif"),
        kcal: 7,
        time: 50 + restTime,
      },
    ],

    // Add more levels and exercises for Legs...
  },
  ABS: {
    "Easy 1": [
      {
        name: "Abdominal Crunches",
        repetitionsOrTime: "x10",
        imageSource: require("./assets/ABSExercises/crunches.gif"),
        kcal: 2,
        time: 20 + restTime,
      },
      {
        name: "Leg Raises",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ABSExercises/legRaises.gif"),
        kcal: 2,
        time: 30 + restTime,
      },
      {
        name: "Russian Twist",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ABSExercises/russianTwist.gif"),
        kcal: 3,
        time: 30 + restTime,
      },
    ],
    "Easy 2": [
      {
        name: "Hollow Hold",
        repetitionsOrTime: "20 sec",
        imageSource: require("./assets/ABSExercises/hollowHold.gif"),
        kcal: 3,
        time: 20 + restTime,
      },
      {
        name: "Reverse Crunches",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/ABSExercises/crunchReverse.gif"),
        kcal: 4,
        time: 40 + restTime,
      },
      {
        name: "Bicycle Crunches",
        repetitionsOrTime: "x16",
        imageSource: require("./assets/ABSExercises/bicycleCrunches.gif"),
        kcal: 4,
        time: 40 + restTime,
      },
      {
        name: "Plank",
        repetitionsOrTime: "30 sec",
        imageSource: require("./assets/ABSExercises/plank.webp"),
        kcal: 4,
        time: 30 + restTime,
      },
    ],

    "Medium 1": [
      {
        name: "Mountain Climber",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/ABSExercises/mountainClimber.gif"),
        kcal: 6,
        time: 40 + restTime,
      },
      {
        name: "Side Plank",
        repetitionsOrTime: "30 sec, \neach side",
        imageSource: require("./assets/ABSExercises/sidePlank.jpg"),
        kcal: 8,
        time: 45 + restTime,
      },
      {
        name: "Scissor Kicks",
        repetitionsOrTime: "x16",
        imageSource: require("./assets/ABSExercises/scissorKicks.gif"),
        kcal: 6,
        time: 60 + restTime,
      },
      {
        name: "Leg Raises",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/ABSExercises/legRaises.gif"),
        kcal: 6,
        time: 40 + restTime,
      },
      {
        name: "Russian Twist",
        repetitionsOrTime: "x24",
        imageSource: require("./assets/ABSExercises/russianTwist.gif"),
        kcal: 5,
        time: 40 + restTime,
      },
    ],
    "Medium 2": [
      {
        name: "Sandbag Sit Ups",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/ABSExercises/sandbagSitUp.gif"),
        kcal: 8,
        time: 35 + restTime,
      },
      {
        name: "Plank",
        repetitionsOrTime: "50 sec",
        imageSource: require("./assets/ABSExercises/plank.webp"),
        kcal: 6,
        time: 50 + restTime,
      },
      {
        name: "Barbell Floor Wiper",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/ABSExercises/barbellFloorwiper.gif"),
        kcal: 7,
        time: 40 + restTime,
      },
      {
        name: "Plank with Shoulder Taps",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/ABSExercises/shoulderTaps.gif"),
        kcal: 4,
        time: 45 + restTime,
      },
      {
        name: "Leg rises",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/legRise.gif"),
        kcal: 5,
        time: 30 + restTime,
      },
    ],
    "Hard 1": [
      {
        name: "Goblet Squats",
        repetitionsOrTime: "x25",
        imageSource: require("./assets/LegsExercises/gobletSquat.gif"),
        kcal: 8,
        time: 50 + restTime,
      },
      {
        name: "Deadlifts",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/deadlift.gif"),
        kcal: 10,
        time: 45 + restTime,
      },
      {
        name: "Leg Press",
        repetitionsOrTime: "x15",
        imageSource: require("./assets/LegsExercises/legPress.gif"),
        kcal: 8,
        time: 40 + restTime,
      },
      {
        name: "Bulgarian Split Squats",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/bulgarianSquat.gif"),
        kcal: 6,
        time: 60 + restTime,
      },
      {
        name: "Standing Calf Raises (Dumbells)",
        repetitionsOrTime: "x25",
        imageSource: require("./assets/LegsExercises/standingCalfRaisesDumbells.gif"),
        kcal: 8,
        time: 60 + restTime,
      },
      {
        name: "Leg Curl Seated",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/legCurlSeated.gif"),
        kcal: 7,
        time: 45 + restTime,
      },
      {
        name: "Box Jumps",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/boxJump.gif"),
        kcal: 10,
        time: 60 + restTime,
      },
    ],
    "Hard 2": [
      {
        name: "Romanian Deadlifts",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/romanianDeadlifts.gif"),
        kcal: 6,
        time: 60 + restTime,
      },
      {
        name: "Dumbbell Lunges",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/dumbbellLunge.gif"),
        kcal: 10,
        time: 70 + restTime,
      },
      {
        name: "Squats (Barbell)",
        repetitionsOrTime: "x25",
        imageSource: require("./assets/LegsExercises/squatBarbell.gif"),
        kcal: 8,
        time: 60 + restTime,
      },
      {
        name: "Donkey Kick",
        repetitionsOrTime: "x30",
        imageSource: require("./assets/LegsExercises/donkeyKick.gif"),
        kcal: 4,
        time: 60 + restTime,
      },
      {
        name: "Leg Curl Lying",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/legCurlLying.gif"),
        kcal: 7,
        time: 50 + restTime,
      },
      {
        name: "Leg Curl Seated",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/legCurlSeated.gif"),
        kcal: 7,
        time: 50 + restTime,
      },
      {
        name: "Kettlebell Swing",
        repetitionsOrTime: "x20",
        imageSource: require("./assets/LegsExercises/kettlebellSwing.gif"),
        kcal: 7,
        time: 50 + restTime,
      },
    ],

    // Add more levels and exercises for Legs...
  },
};
export default exerciseData;
