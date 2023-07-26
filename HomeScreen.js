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
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        TitleFont: require("./assets/fonts/JosefinSans-Regular.ttf"),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  // Declare the difficulty levels
  const difficultyLevels = [
    {
      level: "Easy",
      colorFront: "rgba(35,139,0,1)",
      colorBack: "green",
      screen: "EasyLevels",
      // imageSource: require("./assets/LevelDifficultyImages/easy.png"),
    },
    {
      level: "Medium",
      colorFront: "rgba(255,204,58,1)",
      colorBack: "rgba(233,186,56,1)",
      screen: "MediumLevels",
    },
    {
      level: "Hard",
      colorFront: "rgba(236,117,15,1)",
      colorBack: "rgba(211,106,16,1)",
      screen: "HardLevels",
    },
    {
      level: "Expert",
      colorFront: "rgba(197,8,34,1)",
      colorBack: "rgba(136,16,32,1)",
      screen: "ExpertLevels",
    },
    {
      level: "Themed",
      colorFront: "rgba(87,15,216,1)",
      colorBack: "rgba(67,15,162,1)",
      screen: "ThemedLevels",
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
          {difficultyLevels.map((level, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.difficultyBox,
                {
                  backgroundColor: level.colorFront,
                  borderColor: level.colorBack,
                },
              ]}
              onPress={() => handleDifficultyPress(level.screen)}
            >
              <ImageBackground
                source={require("fit-buddy/assets/HomeScreen/arms-workout.png")}
                style={styles.image}
              >
                <View style={styles.darkOverlay} />
                <Text style={styles.difficultyText}>{level.level}</Text>
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
    marginVertical: 5,
    // borderBottomWidth: 12,
    // borderLeftWidth: 12,
  },
  difficultyText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    alignSelf: "flex-end",
    right: 20,
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
    backgroundColor: "rgba(0,0,0,0.4)", // Adjust the opacity (last value) to control darkness
  },
});

export default GameScreen;
