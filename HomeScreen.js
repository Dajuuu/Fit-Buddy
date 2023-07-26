import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import * as Font from "expo-font";

// import CustomHeader from "./CustomHeader";

const GameScreen = ({ navigation }) => {
  // Load fonts
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        TitleFont: require("./assets/fonts/JosefinSans-Regular.ttf"),
        TitleFontBold: require("./assets/fonts/JosefinSans-Bold.ttf"),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  // Declare the difficulty levels
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
      type: "FBW",
      screen: "ExpertLevels",
      imageSource: require("fit-buddy/assets/HomeScreen/fbw-workout.jpg"),
    },
    {
      type: "Yoga",
      screen: "ThemedLevels",
      imageSource: require("fit-buddy/assets/HomeScreen/yoga-workout.png"),
    },
  ];

  const handleDifficultyPress = (screen) => {
    // Small fix for the route parameters for the EasyLevels
    // TypeError: Cannot read property 'levelCompleted' of undefined
    navigation.navigate(screen, {
      levelCompleted: false,
      completedLevelName: "E0",
    });
  };

  return (
    <View style={styles.container}>
      {/* Display Custom header */}
      {/* <CustomHeader title="Choose Difficulty" /> */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}> FitBuddy</Text>
      </View>
      <ScrollView style={{ width: "100%" }}>
        {/* Display all difficulty levels */}
        <View style={styles.workoutTypesContainer}>
          {workoutTypes.map((workout, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.difficultyBox]}
              onPress={() => handleDifficultyPress(workout.screen)}
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
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)", // Adjust the opacity (last value) to control darkness
  },
});

export default GameScreen;
