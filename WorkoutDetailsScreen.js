import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import CustomHeader from "./CustomHeader";
const WorkoutDetailsScreen = ({ route, navigation }) => {
  const { exercise, exerciseList, currentIndex } = route.params;

  // Function to handle the "Next" button press
  const handleNextExercise = () => {
    if (currentIndex < exerciseList.length - 1) {
      // Get the next exercise from the exerciseList
      const nextExercise = exerciseList[currentIndex + 1];
      // Navigate to the WorkoutDetailsScreen with the next exercise and updated currentIndex
      navigation.push("WorkoutDetailsScreen", {
        exercise: nextExercise,
        exerciseList: exerciseList,
        currentIndex: currentIndex + 1,
      });
    }
  };

  const handleGoBack = () => {
    // Navigate back to the SelectedWorkout screen
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleGoBack} style={styles.nextButtonBack}>
          <Text style={styles.nextButtonText}>Go back home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.exerciseContainer}>
        {/* Display the exercise image */}
        <Image source={exercise.imageSource} style={styles.exerciseImage} />

        {/* Display the exercise name */}
        <Text style={styles.exerciseName}>{exercise.name}</Text>

        {/* Display the exercise details (kcal and time) */}
        <Text style={styles.exerciseDetails}>Kcal: {exercise.kcal}</Text>
        <Text style={styles.exerciseDetails}>
          Time: {exercise.time} seconds
        </Text>
      </View>
      {/* Next button */}
      <TouchableOpacity onPress={handleNextExercise} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(40, 44, 46,1)",
  },
  exerciseImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  exerciseDetails: {
    fontSize: 18,
    color: "white",
  },
  exerciseContainer: {
    justifyContent: "center",
  },
  nextButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButtonBack: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 60,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WorkoutDetailsScreen;
