import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from "react-native";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Asset } from "expo-asset";

const windowHeight = Dimensions.get("window").height;

const RestScreen = ({ route, navigation }) => {
  const imageWidth = useRef(new Animated.Value(100)).current;
  const imageHeight = useRef(new Animated.Value(100)).current;
  const imageScale = new Animated.Value(1);

  useEffect(() => {
    // Create the animation sequence (shrink and enlarge)
    const animationSequence = Animated.sequence([
      Animated.timing(imageScale, {
        toValue: 0.8,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(imageScale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

    // Repeat the animation every 3 seconds
    const animationLoop = Animated.loop(animationSequence, {
      iterations: -1,
      resetBeforeIteration: true,
      delay: 3000,
    });
    animationLoop.start();

    // Clean up the animation loop when the component unmounts
    return () => animationLoop.stop();
  }, [imageScale]);

  const { exercise, exerciseList, currentIndex } = route.params;
  const [timer, setTimer] = useState(45);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Start the timer when the screen mounts
    const interval = setInterval(() => {
      if (!isPaused && timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    // Clear the interval when the screen unmounts
    return () => clearInterval(interval);
  }, [isPaused, timer]);

  // Automatically handleNext when the timer reaches zero
  useEffect(() => {
    if (timer === 0) {
      // handleNext();
    }
  }, [timer]);

  // Problem needs to be cached at the start up of the app
  // useEffect(() => {
  //   const cacheIcon = async () => {
  //     await Asset.fromModule(
  //       require("./assets/Others/heart-rest.png")
  //     ).downloadAsync();
  //   };
  //   cacheIcon();
  // }, []);

  const handleNext = () => {
    if (currentIndex < exerciseList.length - 1) {
      // Get the next exercise from the exerciseList
      const nextExercise = exerciseList[currentIndex + 1];
      // Go back to the previous screen (WorkoutDetailsScreen) and pass the next exercise info
      navigation.goBack();
      navigation.navigate("WorkoutDetailsScreen", {
        exercise: nextExercise,
        exerciseList: exerciseList,
        currentIndex: currentIndex + 1,
      });
    } else {
      // If there are no more exercises, navigate to the desired screen (replace "NextScreen" with your desired screen name)
      navigation.navigate("NextScreen");
    }
  };

  const handleSkip = () => {
    // Navigate to the next screen after rest (you can replace "NextScreen" with your desired screen name)
    navigation.goBack();
  };

  const handlePauseResume = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerUpperHalf}>
        <Text style={styles.text}>Take a rest</Text>
        {/* Add an Image component */}
        <Animated.Image
          source={require("./assets/Others/heart-rest.png")} // Replace with the path to your image
          style={[styles.image, { transform: [{ scale: imageScale }] }]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerBottomHalf}>
        {timer >= 10 ? (
          <Text style={styles.timer}>00:{timer}</Text>
        ) : (
          <Text style={styles.timer}>00:0{timer}</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handlePauseResume}>
          <Text style={styles.buttonText}>
            {isPaused ? (
              <Icon
                name="play"
                style={[styles.buttonIconArrowLeft, { color: "white" }]}
              />
            ) : (
              <Icon
                name="pause"
                style={[styles.buttonIconArrowLeft, { color: "white" }]}
              />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext} onPress={handleNext}>
          <Text style={styles.buttonText}>Go to the next exercise</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(40, 44, 46,1)",
  },
  containerUpperHalf: {
    // flex: 1,
    height: windowHeight * 0.5, // Set the height to 50% of the screen height
    width: "100%",
    backgroundColor: "rgba(46,89,47,1)",
    position: "absolute", // Position it absolutely at the top of the screen
    top: 0,
  },
  containerBottomHalf: {
    top: windowHeight / 5,
    // height: windowHeight * 0.1, // Set the height to 50% of the screen height
    width: "100%",
    // backgroundColor: "rgba(46,89,47,1)",
    // top: 0,
    alignItems: "center",
    // marginTop: 120,
  },
  text: {
    fontSize: 40,
    fontFamily: "TitleFontBold",
    color: "white",
    // marginTop: 250,
    alignSelf: "center",
    paddingTop: windowHeight / 10,
  },
  timer: {
    fontSize: 35,
    marginTop: 30,
    paddingVertical: 30,
    color: "white",
    fontFamily: "TitleFont",
  },
  button: {
    backgroundColor: "rgba(56,157,60,1)",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 100,
    marginBottom: 10,
    // marginTop: 50,
    // width: 280,
    // height: 70,
  },

  buttonNext: {
    backgroundColor: "rgba(49,74,52,1)",
    borderRadius: 8,
    marginTop: 30,
    // marginTop: 50,
    width: 280,
    // height: 60,
    paddingVertical: 15,
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "TitleFontBold",
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    justifyContent: "center",
    // top: "30%",
    width: 200,
    height: 200,
  },
  buttonIconArrowLeft: {
    alignSelf: "center",
    fontSize: 25,
  },
});

export default RestScreen;
