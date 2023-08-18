import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import CustomHeader from "./CustomHeader";
import { useTimerContext } from "./TimerContext";
import { Asset } from "expo-asset";

// Get the width of the screen
const windowWidth = Dimensions.get("window").width;

// Import the data for exercises from file
import exerciseData from "./exerciseData";

const ExerciseScreen = ({ route }) => {
  //
  const { workoutDifficulty, workoutType } = route.params;

  // // More caching needed
  // useEffect(() => {
  //   // Preload images
  //   const cacheIcon = async () => {
  //     await Asset.fromModule(
  //       require("./assets/ArmsExercises/easy1_bicepCurl.gif")
  //     ).downloadAsync();
  //     await Asset.fromModule(
  //       require("./assets/ArmsExercises/easy1_hammerCurl.gif")
  //     ).downloadAsync();
  //     await Asset.fromModule(
  //       require("./assets/ArmsExercises/easy1_wristCurl.gif")
  //     ).downloadAsync();
  //   };
  //   cacheIcon();
  // }, []);

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
      <View
        style={
          workoutType === "Yoga"
            ? [styles.infoContainerYoga]
            : styles.infoContainer
        }
      >
        {/* TODO change the name of the totalKcal */}

        <View style={[styles.totalTimeContainer, styles.center]}>
          <Text style={styles.totalKcal}>Estimated Time:</Text>
          <Text style={styles.totalKcalValue}>{totalTimeFormatted}</Text>
        </View>

        {workoutType !== "Yoga" && (
          <View style={[styles.totalKcalContainer, styles.center]}>
            <Text style={styles.totalKcal}>Total Kcal:</Text>
            <Text style={styles.totalKcalValue}>{totalKcal}</Text>
          </View>
        )}
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
    paddingHorizontal: 15,
    // borderBottomWidth: 12,
    // borderLeftWidth: 12,
  },
  infoContainerYoga: {
    width: "90%",
    height: 100,
    borderRadius: 8,
    // justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(24, 27, 32, 1)",
    // paddingHorizontal: 15,
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
    maxWidth: windowWidth * 0.4,
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
    lineHeight: 25,
  },
  exerciseRepetitionsOrTime: {
    fontFamily: "TitleFont",
    fontSize: 20,
    color: "white",
    textAlign: "right",
    paddingRight: 5,
    paddingTop: 10,
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
