// WorkoutFinished.js

import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTimerContext } from "./TimerContext";
import { useAppContext } from "./AppContext";

const WorkoutFinished = ({ navigation }) => {
  const { secondsTimer, stopTimer, resetTimer } = useTimerContext();
  const { currentExerciseDone, resetCurrentExerciseDoneCount } =
    useAppContext();

  useEffect(() => {
    stopTimer();
  }, []);

  const handleDone = () => {
    // Navigate to the Home screen
    navigation.navigate("Home");
    // resetTimer();
    // Delay is needed, so when the button is pressed the 0 is not yet visible
    const timerResetDelay = setTimeout(() => {
      resetTimer();
      resetCurrentExerciseDoneCount();
    }, 2000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timerResetDelay);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Finished!</Text>
      <Text style={styles.title}>Time: {secondsTimer}</Text>
      <Text style={styles.title}>Done Exercises: {currentExerciseDone}</Text>
      <TouchableOpacity onPress={handleDone} style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
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
});

export default WorkoutFinished;
