import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "./CustomHeader";
import { useTimerContext } from "./TimerContext";

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
        name: "Wrist Curls",
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
        name: "Arm Exercise 3",
        // imageSource: require("./path/to/image3.png"),
        kcal: 90,
        time: 30,
      },
      {
        name: "Arm Exercise 4",
        // imageSource: require("./path/to/image4.png"),
        kcal: 110,
        time: 30,
      },
      // Add more exercises for Easy 2 level...
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

const ExerciseScreen = ({ route }) => {
  const { workoutDifficulty, workoutType } = route.params;
  const getExerciseList = (workoutType, workoutDifficulty) => {
    if (
      exerciseData[workoutType] &&
      exerciseData[workoutType][workoutDifficulty]
    ) {
      return exerciseData[workoutType][workoutDifficulty];
    } else {
      return [];
    }
  };
  const exerciseList = getExerciseList(workoutType, workoutDifficulty);

  const { secondsTimer, startTimer, stopTimer, resetTimer } = useTimerContext();

  // useEffect(() => {
  //   startTimer();
  // }, []);
  // Access the navigation prop
  const navigation = useNavigation();
  // State to keep track of the current exercise index
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  // Function to handle the "Next" button press
  const handleNextExercise = () => {
    if (currentExerciseIndex < exerciseList.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    }
  };

  const exercise = exerciseList[currentExerciseIndex];

  const handleViewDetails = () => {
    navigation.navigate("WorkoutDetailsScreen", {
      exercise: exercise,
      exerciseList: exerciseList,
      currentIndex: currentExerciseIndex,
    });
  };
  // Exercise data organized by workout type and level
  // TODO import as separate file

  // Calculate the total kcal for the level
  const totalKcal = exerciseList.reduce(
    (total, exercise) => total + exercise.kcal,
    0
  );

  // Calculate the total time for the level in seconds
  const totalTimeInSeconds = exerciseList.reduce(
    (total, exercise) => total + exercise.time,
    0
  );

  // Convert total time to mm:ss format
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;
  const totalTimeFormatted = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <CustomHeader title={workoutDifficulty} />
      {/* <Text style={styles.title}>
        {workoutType} {workoutDifficulty}
      </Text> */}
      <View style={styles.infoContainer}>
        {/* TODO change the name of the totalKcal */}
        <View style={[styles.totalTimeContainer, styles.center]}>
          <Text style={styles.totalKcal}>Estimated Time:</Text>
          <Text style={styles.totalKcalValue}>{totalTimeFormatted}</Text>
        </View>
        <View style={[styles.totalKcalContainer, styles.center]}>
          <Text style={styles.totalKcal}>Total Kcal:</Text>
          <Text style={styles.totalKcalValue}>{totalKcal}</Text>
        </View>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {/* Display the list of exercises */}
        <View style={styles.exerciseListContainer}>
          {exerciseList.map((exercise, index) => (
            <View key={index} style={styles.exerciseItem}>
              <View style={styles.leftContainer}>
                <Image
                  source={exercise.imageSource}
                  style={styles.exerciseImage}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseRepetitionsOrTime}>
                  {exercise.repetitionsOrTime}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* Fixed position TouchableOpacity */}
      {/* Firstly stop reset the timer if there was one running in the background, then start from 0 */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          handleViewDetails();
          stopTimer();
          resetTimer();
          startTimer();
        }}
      >
        <Text style={styles.startButtonText}>Start the workout</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(40, 44, 46,1)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginVertical: 20,
  },
  exerciseListContainer: {
    alignItems: "center",
    marginBottom: 100,
  },
  exerciseItem: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
    // marginBottom: 20,
    marginTop: 10,
    backgroundColor: "rgba(71, 78, 84,0.6)",
    padding: 10,
    borderRadius: 8,
  },
  exerciseDetails: {
    fontSize: 14,
    color: "white",
    // fontFamily: "TitleFontBold",
  },

  infoContainer: {
    flexDirection: "row",
    // alignItems: "flex-start",
    width: "90%",
    height: 100,
    borderRadius: 8,
    // margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 10,
    backgroundColor: "rgba(24, 27, 32, 1)",
    paddingHorizontal: 30,
    // borderBottomWidth: 12,
    // borderLeftWidth: 12,
  },
  totalKcalValue: {
    color: "white",
    fontSize: 25,
    // fontWeight: "bold",
    fontFamily: "TitleFontBold",
  },
  totalKcal: {
    fontSize: 22,
    color: "white",
    fontFamily: "TitleFont",
    // marginTop: 20,
  },
  // infoContainer: {
  //   flexDirection: "row",

  //   paddingHorizontal: 20,
  //   marginTop: 20,
  // },
  totalTimeContainer: {
    alignItems: "flex-start",
    // fontFamily: "TitleFontBold",
  },
  totalKcalContainer: {
    alignItems: "flex-end",
  },
  center: {
    alignItems: "center",
  },

  leftContainer: {
    flex: 1,
    marginRight: 10,
  },
  rightContainer: {
    flex: 3,
  },
  // TODO change the size of the image
  exerciseImage: {
    width: 120,
    height: 150,
  },
  exerciseName: {
    fontFamily: "TitleFontBold",
    fontSize: 20,
    color: "white",
    textAlign: "right",
    paddingRight: 5,
  },
  exerciseRepetitionsOrTime: {
    fontFamily: "TitleFont",
    fontSize: 20,
    color: "white",
    textAlign: "right",
    paddingRight: 5,
  },
  startButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(56,157,60,1)",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  startButtonText: {
    color: "white",
    fontSize: 22,
    fontFamily: "TitleFontBold",
  },
});

export default ExerciseScreen;
