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
        {/* Add an Image component */}
        <Animated.Image
          source={require("./assets/heart-rest.png")} // Replace with the path to your image
          style={[styles.image, { transform: [{ scale: imageScale }] }]}
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerBottomHalf}>
        <Text style={styles.text}>Take a rest</Text>
        <Text style={styles.timer}>{timer} seconds</Text>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePauseResume}>
          <Text style={styles.buttonText}>{isPaused ? "Resume" : "Pause"}</Text>
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
    // height: windowHeight * 0.5, // Set the height to 50% of the screen height
    width: "100%",
    // backgroundColor: "rgba(46,89,47,1)",
    // top: 0,
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 40,
    fontFamily: "TitleFontBold",
    color: "white",
    marginTop: 250,
  },
  timer: {
    fontSize: 35,
    marginVertical: 30,
    color: "white",
    fontFamily: "TitleFont",
  },
  button: {
    backgroundColor: "#ff6f00",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    alignSelf: "center",
    justifyContent: "center",
    top: "30%",
    width: 200,
    height: 200,
  },
});

export default RestScreen;
