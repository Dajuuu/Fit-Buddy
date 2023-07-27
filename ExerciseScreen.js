import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseScreen = ({ route }) => {
  const { workoutDifficulty, workoutType } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {workoutType} {workoutDifficulty}
      </Text>
      <View style={styles.exerciseListContainer}></View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(40, 44, 46, 1)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  exerciseListContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
  exerciseItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ExerciseScreen;
