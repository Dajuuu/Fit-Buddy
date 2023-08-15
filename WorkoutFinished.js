// WorkoutFinished.js

import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTimerContext } from "./TimerContext";
import { useAppContext } from "./AppContext";
import Icon from "react-native-vector-icons/FontAwesome5";

const WorkoutFinished = ({ navigation }) => {
  const { secondsTimer, stopTimer, resetTimer } = useTimerContext();
  const {
    currentExerciseDone,
    resetCurrentExerciseDoneCount,
    currentCaloriesBurnt,
    resetCurrentCaloriesBurnt,
  } = useAppContext();

  useEffect(() => {
    stopTimer();
  }, []);

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
      <Text style={styles.title}>Workout Finished!</Text>
      <Text style={styles.completedExercisesText}>
        Completed Exercises: {currentExerciseDone}
      </Text>
      <View style={styles.timeAndKcalContainer}>
        <Text style={styles.text}>Time: {totalTimeFormatted}</Text>
        <Text style={styles.text}>Kcal: {currentCaloriesBurnt}</Text>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleDone}>
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
  doneButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
    top: 160,
    backgroundColor: "rgba(44, 122, 47,1)",
    padding: 30,
    borderRadius: 100,
  },
  iconStyle: {
    fontSize: 40,
  },
});

export default WorkoutFinished;
