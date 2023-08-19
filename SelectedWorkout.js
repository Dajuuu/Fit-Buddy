import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import CustomHeader from "./CustomHeader";

const SelectedWorkoutScreen = ({ navigation, route }) => {
  const { type } = route.params;

  // Declare the difficulty levels
  const workoutDifficulties = [
    {
      difficulty: "Easy 1",
    },
    {
      difficulty: "Easy 2",
    },
    {
      difficulty: "Medium 1",
    },
    {
      difficulty: "Medium 2",
    },
    {
      difficulty: "Hard 1",
    },
    {
      difficulty: "Hard 2",
    },
  ];

  // What information will be passed after user selects the difficulty
  const handleDifficultyPress = (workoutType, workoutDifficulty) => {
    navigation.navigate("ExerciseScreen", {
      workoutDifficulty,
      workoutType,
    });
  };

  // Every difficulty make a bigger gap
  const renderGapView = (index) => {
    if (index > 0 && index % 2 === 0) {
      return <View style={styles.gapView} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* Display Custom header */}
      <CustomHeader title={type} />
      <ScrollView style={{ width: "100%" }}>
        {/* Display all workout types */}
        <View style={styles.workoutDifficultiesContainer}>
          {/* Here is a small placeholder for the FBW workout type - it displays that the page is building */}
          {type === "FBW" ? (
            <View style={styles.centeredContent}>
              <Text style={styles.pageInBuildingText}>Page in building</Text>
            </View>
          ) : (
            // Styling and content for all other workout types
            workoutDifficulties.map((workout, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.difficultyBox]}
                  onPress={() =>
                    handleDifficultyPress(type, workout.difficulty)
                  }
                >
                  <Text style={styles.difficultyText}>
                    {workout.difficulty}
                  </Text>
                </TouchableOpacity>
                {renderGapView(index + 1)}
              </React.Fragment>
            ))
          )}
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
  workoutDifficultiesContainer: {
    marginTop: 10,
  },
  difficultyBox: {
    backgroundColor: "rgba(25, 27, 28,1)",
    width: "90%",
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 5,
  },
  difficultyText: {
    fontFamily: "TitleFontBold",
    fontSize: 30,
    left: 20,
    color: "white",
    alignSelf: "flex-start",
  },
  centeredContent: {
    marginTop: 200,
    justifyContent: "center",
    alignSelf: "center",
  },
  pageInBuildingText: {
    fontFamily: "TitleFontBold",
    fontSize: 30,
    color: "white",
  },
  gapView: {
    width: "45%",
    height: 20,
  },
});

export default SelectedWorkoutScreen;
