import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useAppContext } from "./AppContext";

// Get the screens height
const windowHeight = Dimensions.get("window").height;

const WorkoutDetailsScreen = ({ route, navigation }) => {
  // Imported parameters
  const { exercise, exerciseList, currentIndex } = route.params;
  // Import functions from the AppContext
  const {
    increaseDoneCount,
    increaseTotalCaloriesBurnt,
    increaseCurrentExerciseDone,
    increaseCurrentCaloriesBurnt,
  } = useAppContext();

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
    // Make sure the array does not go to negative index values
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
    // Navigate back to the Home screen
    navigation.navigate("Home");
  };

  // Function that takes care of things when user confirm that a given exercise is completed
  const handleDone = () => {
    // Increment the total Burnt calories by user
    increaseTotalCaloriesBurnt(exercise.kcal);
    // Increase current counter of burnt calories
    increaseCurrentCaloriesBurnt(exercise.kcal);
    // Increment the total number of exercises done by the user
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
        {/* Go back to the home screen button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleGoBack}
          testID="back-button"
        >
          <Icon name="arrow-left" style={styles.leftButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.exerciseContainer} testID="exercise-container">
        {/* Display the exercise image */}
        <Image
          source={exercise.imageSource}
          style={styles.exerciseImage}
          testID="exercise-image"
        />

        {/* Display the exercise name */}
        <Text style={styles.exerciseName} testID="exercise-name">
          {exercise.name}
        </Text>

        {/* Display the exercise details (kcal and time) */}
        <Text style={styles.exerciseDetails} testID="exercise-details">
          {exercise.repetitionsOrTime}
        </Text>
      </View>

      {/* Buttons at the button */}
      <View style={styles.buttonsContainer}>
        {/* Previous button */}
        {/* When this is the first exercise, disable and change the opacity of the button */}
        <TouchableOpacity
          onPress={handlePreviousExercise}
          style={[styles.nextButton, { opacity: currentIndex === 0 ? 0.5 : 1 }]}
          disabled={currentIndex === 0}
          testID="previous-button"
        >
          {/* Change the color of the button, depending on which exercise is the user */}
          <Icon
            name="arrow-left"
            style={[
              styles.buttonIconArrow,
              { color: currentIndex === 0 ? "gray" : "white" },
            ]}
          />
        </TouchableOpacity>

        {/* Done Button */}
        <TouchableOpacity
          onPress={handleDone}
          style={styles.doneButton}
          testID="done-button"
        >
          <Icon name="check-circle" style={styles.buttonIconCheck} />
        </TouchableOpacity>
        {/* Next button */}
        <TouchableOpacity
          onPress={handleNextExercise}
          style={styles.nextButton}
          testID="next-button"
        >
          <Icon name="arrow-right" style={styles.buttonIconArrow} />
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(40, 44, 46,1)",
  },
  exerciseImage: {
    width: "100%",
    height: 300,
    top: windowHeight * 0.05,
    marginBottom: 20,
  },
  exerciseName: {
    fontFamily: "TitleFontBold",
    fontSize: windowHeight * 0.05,
    color: "white",
    marginBottom: 10,
    marginTop: 50,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  exerciseDetails: {
    fontSize: windowHeight * 0.05,
    padding: 20,
    color: "#449944",
    fontFamily: "TitleFont",
  },
  exerciseContainer: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: -100,
  },
  nextButton: {
    padding: 20,
    borderRadius: 100,
  },
  leftButton: {
    alignSelf: "center",
    fontSize: 22,
  },
  upperButtons: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginTop: windowHeight * 0.08,
    marginBottom: 10,
    paddingBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  buttonIconCheck: {
    alignSelf: "center",
    fontSize: 50,
  },
  buttonIconArrow: {
    alignSelf: "center",
    fontSize: 30,
    color: "white",
  },
  doneButton: {
    backgroundColor: "rgba(56,157,60,1)",
    padding: 20,
    borderRadius: 100,
    color: "white",
  },
});

export default WorkoutDetailsScreen;
