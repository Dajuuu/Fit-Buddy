import React, { useContext } from "react";
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
import Icon from "react-native-vector-icons/FontAwesome5";
import { AppContext } from "./AppContext";

const WorkoutDetailsScreen = ({ route, navigation }) => {
  const { exercise, exerciseList, currentIndex } = route.params;
  const {
    increaseDoneCount,
    increaseTotalCaloriesBurnt,
    increaseCurrentExerciseDone,
  } = useContext(AppContext);

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
    // Burnt calories
    increaseTotalCaloriesBurnt(exercise.kcal);
    // Increment the number of exercises done by the user
    increaseDoneCount();
    // Increase the count of exercise in current workout
    increaseCurrentExerciseDone();
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
      <View style={styles.upperButtons}>
        <TouchableOpacity
          style={[styles.leftButton, styles.button, { marginRight: 10 }]}
          onPress={handleGoBack}
        >
          <Icon name="arrow-left" style={[styles.buttonIcon]} />
        </TouchableOpacity>
      </View>
      <View style={styles.exerciseContainer}>
        {/* Display the exercise image */}
        <Image source={exercise.imageSource} style={styles.exerciseImage} />

        {/* Display the exercise name */}
        <Text style={styles.exerciseName}>{exercise.name}</Text>

        {/* Display the exercise details (kcal and time) */}
        <Text style={styles.exerciseDetails}>
          Number of : {exercise.repetitionsOrTime}
        </Text>
        <Text style={styles.exerciseDetails}>{exercise.kcal} kcal</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {/* Previous button */}
        <TouchableOpacity
          onPress={handlePreviousExercise}
          style={[
            styles.nextButton,
            { opacity: currentIndex === 0 ? 0.5 : 1 }, // Apply different opacity when disabled
          ]}
          disabled={currentIndex === 0} // Disable the button if currentIndex is 0
        >
          {/* <Text style={styles.nextButtonText}>Previous</Text> */}
          {/* Change the color of the button, depending on which exercise is the user */}
          <Icon
            name="arrow-left"
            style={[
              styles.buttonIconArrowLeft,
              { color: currentIndex === 0 ? "gray" : "white" },
            ]}
          />
        </TouchableOpacity>
        {/* Done Button */}
        <TouchableOpacity onPress={handleDone} style={styles.doneButton}>
          {/* <Text style={styles.doneButtonText}>Done</Text> */}
          <Icon name="check-circle" style={[styles.buttonIconCheck]} />
        </TouchableOpacity>
        {/* Next button */}
        <TouchableOpacity
          onPress={handleNextExercise}
          style={styles.nextButton}
        >
          <Icon
            name="arrow-right"
            style={[styles.buttonIconArrowLeft, { color: "white" }]}
          />
          {/* <Text style={styles.nextButtonText}>Next</Text> */}
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "rgba(40, 44, 46,1)",
  },
  exerciseImage: {
    width: "100%",
    height: 200,
    top: 10,
    // borderRadius: 100,
    marginBottom: 20,
  },
  exerciseName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  exerciseDetails: {
    fontSize: 36,
    color: "white",
  },
  exerciseContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    // backgroundColor: "#007BFF",

    padding: 20,
    // paddingVertical: 10,
    borderRadius: 100,
    // marginTop: 20,
  },
  nextButtonBack: {
    color: "white",
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

  doneButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  leftButton: {
    // marginRight: 10,
    padding: 12,
    paddingHorizontal: 14,
    backgroundColor: "#ebb381",
    borderRadius: 20,
  },
  upperButtons: {
    flexDirection: "row",
    alignItems: "flex-end",
    // backgroundColor: "#f7d7ba",
    paddingHorizontal: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    marginTop: 70,
    marginBottom: 10,
    paddingBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "row", // Align buttons horizontally
    justifyContent: "space-between", // Stretch buttons from left to right
    alignItems: "center", // Center buttons vertically
    position: "absolute", // Position the container at the bottom of the screen
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 50, // Add horizontal padding to create space between buttons
    paddingVertical: 10, // Add vertical padding to create space between buttons and screen edge
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // Add background color to the container (optional)
  },
  buttonIconCheck: {
    alignSelf: "center",
    fontSize: 50,
  },
  buttonIconArrowLeft: {
    alignSelf: "center",
    fontSize: 30,
  },
  doneButton: {
    // flex: 1,
    backgroundColor: "rgba(56,157,60,1)",
    padding: 20,
    borderRadius: 100,
    color: "white",
    // marginTop: 20,
  },
});

export default WorkoutDetailsScreen;
