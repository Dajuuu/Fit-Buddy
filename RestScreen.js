import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RestScreen = ({ route, navigation }) => {
  const { exercise, exerciseList, currentIndex } = route.params;
  const [timer, setTimer] = useState(45);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Start the timer when the screen mounts
    const interval = setInterval(() => {
      if (!isPaused && timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    // Clear the interval when the screen unmounts
    return () => clearInterval(interval);
  }, [isPaused, timer]);

  const handleNext = () => {
    if (currentIndex < exerciseList.length - 1) {
      // Get the next exercise from the exerciseList
      const nextExercise = exerciseList[currentIndex + 1];
      // Go back to the previous screen (WorkoutDetailsScreen) and pass the next exercise info
      navigation.goBack();
      navigation.navigate("WorkoutDetailsScreen", {
        exercise: nextExercise,
        exerciseList: exerciseList,
        currentIndex: currentIndex + 1,
      });
    } else {
      // If there are no more exercises, navigate to the desired screen (replace "NextScreen" with your desired screen name)
      navigation.navigate("NextScreen");
    }
  };

  const handleSkip = () => {
    // Navigate to the next screen after rest (you can replace "NextScreen" with your desired screen name)
    navigation.goBack();
  };

  const handlePauseResume = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Take a rest</Text>
      <Text style={styles.timer}>{timer} seconds</Text>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePauseResume}>
        <Text style={styles.buttonText}>{isPaused ? "Resume" : "Pause"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timer: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff6f00",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestScreen;
