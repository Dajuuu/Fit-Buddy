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
import CustomHeader from "./CustomHeader";

// import CustomHeader from "./CustomHeader";

const SelectedWorkoutScreen = ({ navigation, route }) => {
  const { type } = route.params;

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
  const workoutDifficulties = [
    {
      difficulty: "Easy 1",
      // screen: "EasyLevels",
      // imageSource: require("fit-buddy/assets/HomeScreen/arms-workout.png"),
    },
    {
      difficulty: "Easy 2",
      // screen: "EasyLevels",
      // imageSource: require("fit-buddy/assets/HomeScreen/arms-workout.png"),
    },
    {
      difficulty: "Medium 1",
      // screen: "EasyLevels",
      // imageSource: require("fit-buddy/assets/HomeScreen/arms-workout.png"),
    },
    {
      difficulty: "Medium 2",
      // screen: "EasyLevels",
      // imageSource: require("fit-buddy/assets/HomeScreen/arms-workout.png"),
    },
    {
      difficulty: "Hard 1",
      // screen: "EasyLevels",
      // imageSource: require("fit-buddy/assets/HomeScreen/arms-workout.png"),
    },
    {
      difficulty: "Hard 2",
      // screen: "EasyLevels",
      // imageSource: require("fit-buddy/assets/HomeScreen/arms-workout.png"),
    },
    // {
    //   type: "Legs",
    //   screen: "MediumLevels",
    //   imageSource: require("fit-buddy/assets/HomeScreen/legs-workout.png"),
    // },
    // {
    //   type: "ABS",
    //   screen: "HardLevels",
    //   imageSource: require("fit-buddy/assets/HomeScreen/abs-workout.jpg"),
    // },
    // {
    //   type: "FBW",
    //   screen: "ExpertLevels",
    //   imageSource: require("fit-buddy/assets/HomeScreen/fbw-workout.jpg"),
    // },
    // {
    //   type: "Yoga",
    //   screen: "ThemedLevels",
    //   imageSource: require("fit-buddy/assets/HomeScreen/yoga-workout.png"),
    // },
  ];

  // const handleDifficultyPress = (workoutDifficulty, workoutType) => {
  //   // Small fix for the route parameters for the EasyLevels
  //   // TypeError: Cannot read property 'levelCompleted' of undefined
  //   navigation.navigate("ExerciseScreen", {
  //     workoutDifficulty,
  //     workoutType,
  //   });
  // };

  const handleDifficultyPress = (workoutType, workoutDifficulty) => {
    // const exerciseList =
    //   exerciseData[String(workoutType)][String(workoutDifficulty)];
    // console.log(exerciseList);
    // console.log("workoutType:", String(workoutType));
    // console.log("workoutDifficulty:", String(workoutDifficulty));
    // console.log(exerciseData["Legs"]["Easy1"]);

    navigation.navigate("ExerciseScreen", {
      // exerciseList,
      workoutDifficulty,
      workoutType,
    });
  };

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
          {workoutDifficulties.map((workout, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={[styles.difficultyBox]}
                onPress={() => handleDifficultyPress(type, workout.difficulty)}
              >
                {/* {console.log(workout.difficulty)} */}
                {/* <ImageBackground
                  source={workout.imageSource}
                  style={styles.image}
                > */}
                {/* Apply dark overlay to the image */}
                <View style={styles.darkOverlay} />
                <Text style={styles.difficultyText}>{workout.difficulty}</Text>
                {/* </ImageBackground> */}
              </TouchableOpacity>
              {renderGapView(index + 1)}
            </React.Fragment>
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
  workoutDifficultiesContainer: {
    marginTop: 10,
  },
  difficultyBox: {
    width: "90%",
    height: 100,
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
  gapView: {
    width: "45%", // Adjust this value to set the width of the gap
    height: 20, // Adjust this value to control the height of the gap
  },
});

export default SelectedWorkoutScreen;
