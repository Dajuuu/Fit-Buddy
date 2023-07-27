import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseScreen = ({ route }) => {
  const { workoutDifficulty, workoutType } = route.params;

  // Exercise data organized by workout type and level
  const exerciseData = {
    Arms: {
      "Easy 1": ["ArmExer1", "ArmExer2"],
      "Easy 2": ["ArmExer3", "ArmExer4"],
      // Add more levels and exercises for Arms...
    },
    Legs: {
      "Easy 1": ["LegExer1", "LegExer2"],
      "Easy 2": ["LegExer3", "LegExer4"],
      // Add more levels and exercises for Legs...
    },
    // Add more workout types...
  };

  // Function to get the list of exercises based on workoutDifficulty and workoutType
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {workoutType} {workoutDifficulty}
      </Text>
      <View style={styles.exerciseListContainer}>
        {/* Display the list of exercises */}
        {exerciseList.map((exercise, index) => (
          <Text key={index} style={styles.exerciseText}>
            {exercise}
          </Text>
        ))}
      </View>
      <StatusBar style="light" />
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
    color: "white",
    marginTop: 20,
  },
  exerciseListContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  exerciseText: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
});

export default ExerciseScreen;
