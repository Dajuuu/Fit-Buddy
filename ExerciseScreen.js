import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "./CustomHeader";

const ExerciseScreen = ({ route }) => {
  const { workoutDifficulty, workoutType } = route.params;

  // Access the navigation prop
  const navigation = useNavigation();

  // Handle press of the "Start the workout" button
  const handleStartWorkout = () => {
    // Get the first exercise from exerciseList
    const firstExercise = exerciseList[0];
    // Navigate to the "WorkoutDetailsScreen" and pass the first exercise as route parameter
    navigation.navigate("WorkoutDetailsScreen", { exercise: firstExercise });
  };

  // Exercise data organized by workout type and level
  // TODO import as separate file
  const exerciseData = {
    Arms: {
      "Easy 1": [
        {
          name: "Arm Exercise 1",
          imageSource: require("./assets/HomeScreen/abs-workout1.jpg"),
          kcal: 100,
          time: 30,
        },
        {
          name: "Arm Exercise 2",
          // imageSource: require("./path/to/image2.png"),
          kcal: 120,
          time: 30,
        },
        {
          name: "Arm Exercise 3",
          imageSource: require("./assets/HomeScreen/abs-workout1.jpg"),
          kcal: 100,
          time: 30,
        },
        {
          name: "Arm Exercise 4",
          // imageSource: require("./path/to/image2.png"),
          kcal: 120,
          time: 30,
        },
        {
          name: "Arm Exercise 5",
          imageSource: require("./assets/HomeScreen/abs-workout1.jpg"),
          kcal: 100,
          time: 30,
        },
        {
          name: "Arm Exercise 6",
          // imageSource: require("./path/to/image2.png"),
          kcal: 120,
          time: 30,
        },

        // Add more exercises for Easy 1 level...
      ],
      "Easy 2": [
        {
          name: "Arm Exercise 3",
          // imageSource: require("./path/to/image3.png"),
          kcal: 90,
          time: 30,
        },
        {
          name: "Arm Exercise 4",
          // imageSource: require("./path/to/image4.png"),
          kcal: 110,
          time: 30,
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

  // Calculate the total kcal for the level
  const totalKcal = exerciseList.reduce(
    (total, exercise) => total + exercise.kcal,
    0
  );

  // Calculate the total time for the level in seconds
  const totalTimeInSeconds = exerciseList.reduce(
    (total, exercise) => total + exercise.time,
    0
  );

  // Convert total time to mm:ss format
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;
  const totalTimeFormatted = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <CustomHeader title={workoutDifficulty} />
      {/* <Text style={styles.title}>
        {workoutType} {workoutDifficulty}
      </Text> */}
      <View style={styles.infoContainer}>
        <View style={[styles.totalTimeContainer, styles.center]}>
          <Text style={styles.totalKcal}>Total Time:</Text>
          <Text style={styles.totalKcalValue}>{totalTimeFormatted}</Text>
        </View>
        <View style={[styles.totalKcalContainer, styles.center]}>
          <Text style={styles.totalKcal}>Total Kcal:</Text>
          <Text style={styles.totalKcalValue}>{totalKcal}</Text>
        </View>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {/* Display the list of exercises */}
        <View style={styles.exerciseListContainer}>
          {exerciseList.map((exercise, index) => (
            <View key={index} style={styles.exerciseItem}>
              <View style={styles.leftContainer}>
                <Image
                  source={exercise.imageSource}
                  style={styles.exerciseImage}
                />
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* Fixed position TouchableOpacity */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText} onPress={handleStartWorkout}>
          Start the workout
        </Text>
      </TouchableOpacity>
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
    marginBottom: 80,
  },
  exerciseItem: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: 10,
    borderRadius: 8,
  },
  exerciseImage: {
    alignItems: "flex-start",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    // right: 10,
  },
  exerciseDetails: {
    fontSize: 14,
    color: "white",
  },
  totalKcal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    // marginTop: 20,
  },
  infoContainer: {
    flexDirection: "row",
    // alignItems: "flex-start",
    width: "90%",
    height: 100,
    borderRadius: 8,
    // margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "red",
    // borderBottomWidth: 12,
    // borderLeftWidth: 12,
  },
  totalKcalValue: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  // infoContainer: {
  //   flexDirection: "row",

  //   paddingHorizontal: 20,
  //   marginTop: 20,
  // },
  totalTimeContainer: {
    alignItems: "flex-start",
  },
  totalKcalContainer: {
    alignItems: "flex-end",
  },
  center: {
    alignItems: "center",
  },

  leftContainer: {
    flex: 1,
    marginRight: 10,
  },
  rightContainer: {
    flex: 3,
  },
  exerciseImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  exerciseName: {
    fontFamily: "TitleFontBold",
    fontSize: 18,
    color: "white",
    textAlign: "right",
  },
  startButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "TitleFontBold",
  },
});

export default ExerciseScreen;
