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
        name: "Leg Exercise 1",
        // imageSource: require("./path/to/image5.png"),
        kcal: 80,
        time: "3 minutes",
      },
      {
        name: "Leg Exercise 2",
        // imageSource: require("./path/to/image6.png"),
        kcal: 95,
        time: "4 minutes",
      },
      // Add more exercises for Easy 1 level...
    ],
    "Easy 2": [
      {
        name: "Leg Exercise 3",
        // imageSource: require("./path/to/image7.png"),
        kcal: 85,
        time: "3.5 minutes",
      },
      {
        name: "Leg Exercise 4",
        // imageSource: require("./path/to/image8.png"),
        kcal: 100,
        time: "4 minutes",
      },
      // Add more exercises for Easy 2 level...
    ],
    // Add more levels and exercises for Legs...
  },
  // Add more workout types...
};
export default exerciseData;
