import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import CustomHeader from "./CustomHeader";

const ExerciseScreen = ({ route }) => {
  const { workoutDifficulty, workoutType } = route.params;

  // Exercise data organized by workout type and level
  const exerciseData = {
    Arms: {
      "Easy 1": [
        {
          name: "Arm Exercise 1",
          imageSource: require("./assets/HomeScreen/abs-workout1.jpg"),
          kcal: 100,
          time: "5 minutes",
        },
        {
          name: "Arm Exercise 2",
          // imageSource: require("./path/to/image2.png"),
          kcal: 120,
          time: "6 minutes",
        },
        // Add more exercises for Easy 1 level...
      ],
      "Easy 2": [
        {
          name: "Arm Exercise 3",
          // imageSource: require("./path/to/image3.png"),
          kcal: 90,
          time: "4 minutes",
        },
        {
          name: "Arm Exercise 4",
          // imageSource: require("./path/to/image4.png"),
          kcal: 110,
          time: "5 minutes",
        },
        // Add more exercises for Easy 2 level...
      ],
      // Add more levels and exercises for Arms...
    },
    Legs: {
      "Easy 1": [
        {
          name: "Leg Exercise 1",
          // imageSource: require("./path/to/image5.png"),
          kcal: 80,
          time: "3 minutes",
        },
        {
          name: "Leg Exercise 2",
          // imageSource: require("./path/to/image6.png"),
          kcal: 95,
          time: "4 minutes",
        },
        // Add more exercises for Easy 1 level...
      ],
      "Easy 2": [
        {
          name: "Leg Exercise 3",
          // imageSource: require("./path/to/image7.png"),
          kcal: 85,
          time: "3.5 minutes",
        },
        {
          name: "Leg Exercise 4",
          // imageSource: require("./path/to/image8.png"),
          kcal: 100,
          time: "4 minutes",
        },
        // Add more exercises for Easy 2 level...
      ],
      // Add more levels and exercises for Legs...
    },
    // Add more workout types...
  };

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
      <CustomHeader title={workoutDifficulty} />
      {/* <Text style={styles.title}>
        {workoutType} {workoutDifficulty}
      </Text> */}
      <ScrollView style={{ width: "100%" }}>
        {/* Display the list of exercises */}
        <View style={styles.exerciseListContainer}>
          {exerciseList.map((exercise, index) => (
            <View key={index} style={styles.exerciseItem}>
              <Image
                source={exercise.imageSource}
                style={styles.exerciseImage}
              />
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseDetails}>
                Kcal: {exercise.kcal} - Time: {exercise.time}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(40, 44, 46,1)",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginVertical: 20,
  },
  exerciseListContainer: {
    alignItems: "center",
  },
  exerciseItem: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 10,
    borderRadius: 8,
  },
  exerciseImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  exerciseDetails: {
    fontSize: 14,
    color: "white",
  },
});

export default ExerciseScreen;
