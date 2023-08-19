import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
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

// Get the width of the screen
const windowWidth = Dimensions.get("window").width;

// Import the data for exercises from file
import exerciseData from "./exerciseData";

const ExerciseScreen = ({ route }) => {
  // Paramaters taken from previous screen
  const { workoutDifficulty, workoutType } = route.params;

  // Function that takes the data from exerciseData for specific difficulty and workout type
  // If something does not exist or is missing, then simply display nothing
  // This is to make sure that no error is present
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

  // Get the data for a workout type and difficulty user chose
  const exerciseList = getExerciseList(workoutType, workoutDifficulty);

  // Get the functions for timer from the TimerContext
  const { startTimer, stopTimer, resetTimer } = useTimerContext();

  // Access the navigation prop
  const navigation = useNavigation();

  // Display the current exercise from the exerciseList, based on the index.
  // Starting from the first one
  const exercise = exerciseList[0];

  // Pass the the data to the next screen
  const handleViewDetails = () => {
    navigation.navigate("WorkoutDetailsScreen", {
      exercise: exercise,
      exerciseList: exerciseList,
      // Current index indicates, which position of the exercises list to start from
      currentIndex: 0,
    });
  };

  // Calculate the total kcal for the given workout
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
      {/* Change the style depending whether it is a Yoga or not */}
      {/* For yoga there is not kcal values, so the styling applied for the info box is different */}
      <View
        style={
          workoutType === "Yoga"
            ? [styles.infoContainerYoga]
            : styles.infoContainer
        }
      >
        <View style={[styles.totalTimeContainer, styles.center]}>
          <Text style={styles.infoText}>Estimated Time:</Text>
          <Text style={styles.infoTextValue}>{totalTimeFormatted}</Text>
        </View>

        {/* If it is yoga, do not display the Kcal information */}
        {workoutType !== "Yoga" && (
          <View style={[styles.totalKcalContainer, styles.center]}>
            <Text style={styles.infoText}>Total Kcal:</Text>
            <Text style={styles.infoTextValue}>{totalKcal}</Text>
          </View>
        )}
      </View>
      <ScrollView style={{ width: "100%" }}>
        {/* Display the list of exercises and all information associated */}
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
    marginTop: 10,
    backgroundColor: "rgba(71, 78, 84,0.6)",
    padding: 10,
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: "row",
    width: "90%",
    height: 100,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(24, 27, 32, 1)",
    paddingHorizontal: 15,
  },
  infoContainerYoga: {
    width: "90%",
    height: 100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(24, 27, 32, 1)",
  },
  infoTextValue: {
    color: "white",
    fontSize: 25,
    fontFamily: "TitleFontBold",
  },
  infoText: {
    fontSize: 22,
    color: "white",
    fontFamily: "TitleFont",
  },
  totalTimeContainer: {
    alignItems: "flex-start",
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
