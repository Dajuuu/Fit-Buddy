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
import * as Font from "expo-font";
import { useAppContext } from "./AppContext";
import { useTimerContext } from "./TimerContext";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Asset } from "expo-asset";

const GameScreen = ({ navigation }) => {
  // Load fonts hook
  const [fontLoaded, setFontLoaded] = useState(false);
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

    // Load fonts
    const loadFont = async () => {
      await Font.loadAsync({
        TitleFont: require("./assets/fonts/JosefinSans-Regular.ttf"),
        TitleFontBold: require("./assets/fonts/JosefinSans-Bold.ttf"),
      });
      setFontLoaded(true);
    };
    loadFont();

    // Cache the images for the HomeScreen
    const cacheIcon = async () => {
      await Asset.fromModule(
        require("./assets/HomeScreen/arms-workout.png")
      ).downloadAsync();
      await Asset.fromModule(
        require("./assets/HomeScreen/legs-workout.png")
      ).downloadAsync();
      await Asset.fromModule(
        require("./assets/HomeScreen/abs-workout.jpg")
      ).downloadAsync();
      await Asset.fromModule(
        require("./assets/HomeScreen/fbw-workout.jpg")
      ).downloadAsync();
      await Asset.fromModule(
        require("./assets/HomeScreen/yoga-workout.png")
      ).downloadAsync();
    };
    cacheIcon();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  // Declare the difficulty levels
  // TODO delete screen objects
  const workoutTypes = [
    {
      type: "Arms",
      screen: "EasyLevels",
      imageSource: require("fit-buddy/assets/HomeScreen/arms-workout.png"),
    },
    {
      type: "Legs",
      screen: "MediumLevels",
      imageSource: require("fit-buddy/assets/HomeScreen/legs-workout.png"),
    },
    {
      type: "ABS",
      screen: "HardLevels",
      imageSource: require("fit-buddy/assets/HomeScreen/abs-workout.jpg"),
    },
    {
      type: "Yoga",
      screen: "ThemedLevels",
      imageSource: require("fit-buddy/assets/HomeScreen/yoga-workout.png"),
    },
    {
      type: "FBW",
      screen: "ExpertLevels",
      imageSource: require("fit-buddy/assets/HomeScreen/fbw-workout.jpg"),
    },
  ];

  const handleWorkoutTypePress = (type) => {
    // Small fix for the route parameters for the EasyLevels
    // TypeError: Cannot read property 'levelCompleted' of undefined
    navigation.navigate("ExerciseDifficulty", {
      type,
    });
  };
  const handleTrashPress = () => {
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
    <View style={styles.container}>
      <Modal
        visible={showOverlay}
        animationType="slide"
        transparent
        statusBarTranslucent
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
      {/* <CustomHeader title="Choose Difficulty" /> */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}> FitBuddy</Text>
      </View>
      <View style={styles.infoContainer}>
        {/* TODO change the name of the totalKcal */}
        <View style={[styles.totalTimeContainer, styles.center]}>
          <Text style={styles.totalKcal}>Exercises Done:</Text>
          <Text style={styles.totalKcalValue}>{doneCount}</Text>
        </View>
        <View style={[styles.totalKcalContainer, styles.center]}>
          <Text style={styles.totalKcal}>Calories Burnt:</Text>
          <Text style={styles.totalKcalValue}>{totalCaloriesBurnt}</Text>
        </View>
        <TouchableOpacity
          style={styles.trashIconContainer}
          onPress={handleTrashPress}
        >
          <Icon name="trash" style={[styles.iconStyle, { color: "white" }]} />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.textContainer}>
        <Text style={styles.countText}>Done Count: {doneCount}</Text>
        <Text style={styles.countText}>Calories: {totalCaloriesBurnt}</Text>
      </View> */}
      <ScrollView style={{ width: "100%" }}>
        {/* Display all difficulty levels */}
        <View style={styles.workoutTypesContainer}>
          {workoutTypes.map((workout, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.difficultyBox]}
              onPress={() => {
                handleWorkoutTypePress(workout.type);
                stopTimer();
                resetTimer();
              }}
            >
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
    // justifyContent: "center",
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
    // margin: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
    // borderBottomWidth: 12,
    // borderLeftWidth: 12,
  },
  difficultyText: {
    fontFamily: "TitleFontBold",
    // fontWeight: "bold",
    fontSize: 30,
    left: 20,
    color: "white",
    alignSelf: "flex-start",
  },
  image: {
    position: "absolute",
    // top: 15,
    // left: 10,
    width: "100%",
    height: "100%",
    // marginRight: 10,
    alignSelf: "flex-start",
    borderRadius: 20,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Adjust this value to set the desired border radius
    overflow: "hidden", // This is important to ensure the border radius is applied correctly
  },
  textContainer: {
    marginTop: 30,
    padding: 20,
    width: "100%",

    // backgroundColor: "green",
  },
  titleText: {
    textAlign: "center",
    fontSize: 35,
    fontFamily: "TitleFont",
    color: "white",
  },
  countText: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "TitleFont",
    color: "white",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)", // Adjust the opacity (last value) to control darkness
  },
  totalTimeContainer: {
    alignItems: "flex-start",
    // fontFamily: "TitleFontBold",
  },
  infoContainer: {
    flexDirection: "row",
    // alignItems: "flex-start",
    width: "95%",
    height: 100,
    borderRadius: 8,
    // margin: 10,
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 10,
    backgroundColor: "rgba(24, 27, 32, 1)",
    paddingHorizontal: 30,
    // borderBottomWidth: 12,
    // borderLeftWidth: 12,
  },
  totalKcalValue: {
    color: "white",
    fontSize: 23,
    // fontWeight: "bold",
    fontFamily: "TitleFontBold",
  },
  totalKcal: {
    fontSize: 18,
    color: "white",
    fontFamily: "TitleFont",
    // marginTop: 20,
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
    // paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width: 100,
  },
  buttonCancel: {
    backgroundColor: "rgba(56,64,56,1)",
    // paddingHorizontal: 20,
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

export default GameScreen;
