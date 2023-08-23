import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Vibration,
} from "react-native";
import { useTimerContext } from "./TimerContext";
import { useAppContext } from "./AppContext";
import Icon from "react-native-vector-icons/FontAwesome5";

const windowHeight = Dimensions.get("window").height;

const WorkoutFinished = ({ navigation }) => {
  // When user reaches the end of the workout - make a small vibration of the device
  Vibration.vibrate(1000); // Vibrate for 1 second

  const { secondsTimer, stopTimer, resetTimer } = useTimerContext();
  const {
    currentExerciseDone,
    resetCurrentExerciseDoneCount,
    currentCaloriesBurnt,
    resetCurrentCaloriesBurnt,
  } = useAppContext();

  useEffect(() => {
    stopTimer();
  });

  // Convert total time to mm:ss format
  const minutes = Math.floor(secondsTimer / 60);
  const seconds = secondsTimer % 60;
  const totalTimeFormatted = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  const handleDone = () => {
    // Navigate to the Home screen
    navigation.navigate("Home");
    // resetTimer();
    // Delay is needed, so when the button is pressed the 0 is not yet visible
    const timerResetDelay = setTimeout(() => {
      resetTimer();
      resetCurrentExerciseDoneCount();
      resetCurrentCaloriesBurnt();
    }, 2000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timerResetDelay);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="check" style={[styles.iconStyle, { color: "white" }]} />
      </View>
      <Text style={styles.title} testID="title">
        Workout Finished!
      </Text>
      <Text style={styles.completedExercisesText} testID="compl-text">
        Completed Exercises: {currentExerciseDone}
      </Text>
      <View style={styles.timeAndKcalContainer}>
        <Text style={styles.text} testID="text">
          Time: {totalTimeFormatted}
        </Text>
        {/* If the exerciseType is Yoga or user just skipped all exercises - do not show the Kcal value*/}
        {currentCaloriesBurnt > 0 && (
          <Text style={styles.text}>Kcal: {currentCaloriesBurnt}</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.startButton}
        onPress={handleDone}
        testID="done-button"
      >
        <Text style={styles.startButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(40, 44, 46,1)",
  },
  title: {
    fontSize: 36,
    marginBottom: 10,
    color: "white",
    fontFamily: "TitleFontBold",
  },
  text: {
    fontSize: 28,
    marginVertical: 8,
    color: "white",
    fontFamily: "TitleFontBold",
  },
  completedExercisesText: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
    fontFamily: "TitleFont",
  },
  timeAndKcalContainer: {
    flexDirection: "column",
    marginTop: 20,
  },
  startButton: {
    position: "absolute",
    bottom: 60,
    backgroundColor: "rgba(56,157,60,1)",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonText: {
    color: "white",
    fontSize: 25,
    fontFamily: "TitleFontBold",
  },
  iconContainer: {
    position: "absolute",
    top: windowHeight * 0.1,
    backgroundColor: "rgba(44, 122, 47,1)",
    padding: 30,
    borderRadius: 100,
  },
  iconStyle: {
    fontSize: 40,
  },
});

export default WorkoutFinished;
