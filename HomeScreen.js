import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Modal,
} from "react-native";
import { useAppContext } from "./AppContext";
import { useTimerContext } from "./TimerContext";
import Icon from "react-native-vector-icons/FontAwesome5";

const HomeScreen = ({ navigation }) => {
  // Import functions and variables for the calories and exercise count from the AppContext
  const {
    doneCount,
    totalCaloriesBurnt,
    resetLoadDoneCount,
    resetTotalCaloriesBurnt,
  } = useAppContext();
  // Import function and variable for the timer from the TimerContext
  const { stopTimer, resetTimer } = useTimerContext();
  // Show delete progress overlay
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Declare the overlay to initially stay hidden
    setShowOverlay(false);
  }, []);

  // Declare the difficulty levels
  const workoutTypes = [
    {
      type: "Arms",
      imageSource: require("fit-buddy/assets/HomeScreen/arms-workout.png"),
    },
    {
      type: "Legs",
      imageSource: require("fit-buddy/assets/HomeScreen/legs-workout.png"),
    },
    {
      type: "ABS",
      imageSource: require("fit-buddy/assets/HomeScreen/abs-workout.jpg"),
    },
    {
      type: "Yoga",
      imageSource: require("fit-buddy/assets/HomeScreen/yoga-workout.png"),
    },
    {
      type: "FBW",
      imageSource: require("fit-buddy/assets/HomeScreen/fbw-workout.jpg"),
    },
  ];

  // When pressing any of the workout types - redirect to the difficulties screen
  const handleWorkoutTypePress = (type) => {
    navigation.navigate("ExerciseDifficulty", {
      type,
    });
  };
  const handleTrashBinPress = () => {
    // Show the overlay when the trash icon is pressed
    setShowOverlay(true);
  };
  const handleDeleteProgress = () => {
    // Handle the deletion of progress and reset counters
    resetLoadDoneCount();
    resetTotalCaloriesBurnt();
    setShowOverlay(false); // Hide the overlay after confirming
  };

  const handleCancelDelete = () => {
    // Hide the overlay when cancel is pressed
    setShowOverlay(false);
  };

  return (
    <View style={styles.container} testID="homescreen-container">
      <Modal
        visible={showOverlay}
        animationType="slide"
        transparent
        statusBarTranslucent
        testID="overlay"
      >
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <Text style={styles.overlayText}>
              Do you want to delete your saved progress?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonYes}
                onPress={handleDeleteProgress}
              >
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={handleCancelDelete}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Display Custom header */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}> FitBuddy</Text>
      </View>
      {/* Small info box at the top */}
      <View style={styles.infoContainer} testID="info-container">
        {/* TODO change the name of the infoText */}
        <View style={styles.totalTimeContainer}>
          <Text style={styles.infoText}>Exercises Done:</Text>
          <Text style={styles.infoTextValue}>{doneCount}</Text>
        </View>
        <View>
          <Text style={styles.infoText}>Calories Burnt:</Text>
          <Text style={styles.infoTextValue}>{totalCaloriesBurnt}</Text>
        </View>
        <TouchableOpacity
          style={styles.trashIconContainer}
          onPress={handleTrashBinPress}
          testID="trash-bin-button"
        >
          <Icon name="trash" style={{ color: "white" }} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ width: "100%" }}>
        {/* Display all difficulty levels */}
        <View style={styles.workoutTypesContainer}>
          {workoutTypes.map((workout, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.difficultyBox]}
              // When selecting any of the difficulties, make sure that the timer,
              // if by any chance it was running in the background, is stopped and reset
              onPress={() => {
                handleWorkoutTypePress(workout.type);
                stopTimer();
                resetTimer();
              }}
            >
              {/* Display the image as the background*/}
              <ImageBackground
                source={workout.imageSource}
                style={styles.image}
              >
                {/* Apply dark overlay to the image */}
                <View style={styles.darkOverlay} />
                <Text style={styles.difficultyText}>{workout.type}</Text>
              </ImageBackground>
            </TouchableOpacity>
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
  workoutTypesContainer: {
    marginTop: 10,
  },
  difficultyBox: {
    width: "90%",
    height: 150,
    borderRadius: 8,
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  difficultyText: {
    fontFamily: "TitleFontBold",
    fontSize: 30,
    left: 20,
    color: "white",
    alignSelf: "flex-start",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  textContainer: {
    marginTop: 30,
    padding: 20,
    width: "100%",
  },
  titleText: {
    textAlign: "center",
    fontSize: 35,
    fontFamily: "TitleFont",
    color: "white",
  },

  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  totalTimeContainer: {
    alignItems: "flex-start",
  },
  infoContainer: {
    flexDirection: "row",
    width: "95%",
    height: 100,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(24, 27, 32, 1)",
    paddingHorizontal: 30,
  },
  infoTextValue: {
    color: "white",
    fontSize: 23,
    fontFamily: "TitleFontBold",
  },
  infoText: {
    fontSize: 18,
    color: "white",
    fontFamily: "TitleFont",
  },
  trashIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },

  // Overlay
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContent: {
    backgroundColor: "rgba(40, 44, 46,1)",
    padding: 30,
    borderRadius: 8,
    width: "75%",
  },
  overlayText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    fontFamily: "TitleFontBold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonYes: {
    backgroundColor: "rgba(56,157,60,1)",
    paddingVertical: 10,
    borderRadius: 8,
    width: 100,
  },
  buttonCancel: {
    backgroundColor: "rgba(56,64,56,1)",
    paddingVertical: 10,
    borderRadius: 8,
    width: 100,
  },
  buttonText: {
    color: "#fff",
    fontSize: 23,
    justifyContent: "center",
    alignSelf: "center",
    fontFamily: "TitleFont",
  },
});
export default HomeScreen;
