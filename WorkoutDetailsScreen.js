import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
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
    } else {
      // If there are no more exercises, navigate to the WorkoutFinished screen
      navigation.navigate("WorkoutFinished");
    }
  };
  // Function to handle the "Previous" button press
  const handlePreviousExercise = () => {
    if (currentIndex > 0) {
      // Get the previous exercise from the exerciseList
      const previousExercise = exerciseList[currentIndex - 1];
      // Navigate to the WorkoutDetailsScreen with the previous exercise and updated currentIndex
      navigation.push("WorkoutDetailsScreen", {
        exercise: previousExercise,
        exerciseList: exerciseList,
        currentIndex: currentIndex - 1,
      });
    }
  };

  const handleGoBack = () => {
    // Navigate back to the SelectedWorkout screen
    navigation.navigate("Home");
  };

  const handleDone = () => {
    if (currentIndex === exerciseList.length - 1) {
      // If the current exercise is the last one, navigate to the WorkoutFinished screen
      navigation.navigate("WorkoutFinished");
    } else {
      // Get the next exercise from the exerciseList
      const nextExercise = exerciseList[currentIndex + 1];
      // Navigate to the RestScreen with the next exercise and updated currentIndex
      navigation.push("RestScreen", {
        exercise: nextExercise,
        exerciseList: exerciseList,
        currentIndex: currentIndex,
      });
    }
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
      {/* Previous button */}
      <TouchableOpacity
        onPress={handlePreviousExercise}
        style={[
          styles.nextButton,
          { backgroundColor: "gray", opacity: currentIndex === 0 ? 0.5 : 1 }, // Apply different opacity when disabled
        ]}
        disabled={currentIndex === 0} // Disable the button if currentIndex is 0
      >
        <Text style={styles.nextButtonText}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDone} style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
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
  doneButton: {
    backgroundColor: "#ff6f00",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  doneButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WorkoutDetailsScreen;
