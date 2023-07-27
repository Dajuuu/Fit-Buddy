import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";

const WorkoutDetailsScreen = ({ route }) => {
  const { exercise } = route.params;

  return (
    <View style={styles.container}>
      {/* Display the exercise image */}
      <Image source={exercise.imageSource} style={styles.exerciseImage} />

      {/* Display the exercise name */}
      <Text style={styles.exerciseName}>{exercise.name}</Text>

      {/* Display the exercise details (kcal and time) */}
      <Text style={styles.exerciseDetails}>Kcal: {exercise.kcal}</Text>
      <Text style={styles.exerciseDetails}>Time: {exercise.time} seconds</Text>

      {/* Add more exercise details as needed */}

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});

export default WorkoutDetailsScreen;
