import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const windowHeight = Dimensions.get("window").height;

const RestScreen = ({ route, navigation }) => {
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

  const { exerciseList, currentIndex } = route.params;
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

  // Automatically handleNext (go to the next exercise) when the timer reaches zero
  useEffect(() => {
    if (timer === 0) {
      handleNext();
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
    }
  };

  // Pause/Resume rest timer
  const handlePauseResume = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerUpperHalf}>
        <Text style={styles.text}>Take a rest</Text>
        <Animated.Image
          source={require("./assets/Others/heart-rest.png")}
          style={[styles.image, { transform: [{ scale: imageScale }] }]}
          resizeMode="cover"
          testID="heart-image"
        />
      </View>
      <View style={styles.containerBottomHalf}>
        {/* If the timer has more than 10 seconds change the text accordingly */}
        {timer >= 10 ? (
          <Text style={styles.timer}>00:{timer}</Text>
        ) : (
          <Text style={styles.timer}>00:0{timer}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handlePauseResume}
          testID="pause-resume-button"
        >
          {/* Change the icon on the button, depending on the state */}
          <Text style={styles.buttonText}>
            {isPaused ? (
              <Icon
                name="play"
                style={[styles.buttonIcon]}
                testID="play-icon"
              />
            ) : (
              <Icon
                name="pause"
                style={[styles.buttonIcon]}
                testID="pause-icon"
              />
            )}
          </Text>
        </TouchableOpacity>
        {/* Go to next exercise button */}
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={handleNext}
          testID="next-exercise-button"
        >
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
    height: windowHeight * 0.5,
    width: "100%",
    backgroundColor: "rgba(46,89,47,1)",
    position: "absolute",
    top: 0,
  },
  containerBottomHalf: {
    top: windowHeight / 5,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontFamily: "TitleFontBold",
    color: "white",
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
  },
  buttonNext: {
    backgroundColor: "rgba(49,74,52,1)",
    borderRadius: 8,
    marginTop: 30,
    width: 280,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
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
    width: 200,
    height: 200,
  },
  buttonIcon: {
    alignSelf: "center",
    fontSize: 25,
    color: "white",
  },
});

export default RestScreen;
