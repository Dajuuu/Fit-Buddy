import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./AppContext";
import { TimerProvider } from "./TimerContext";

import LoadingScreen from "./AppLoading";
import HomeScreen from "./HomeScreen";
import SelectedWorkout from "./SelectedWorkout";
import ExerciseScreen from "./ExerciseScreen";
import WorkoutDetailsScreen from "./WorkoutDetailsScreen";
import RestScreen from "./RestScreen";
import WorkoutFinished from "./WorkoutFinished";

import { Asset } from "expo-asset";
import * as Font from "expo-font";
import imageAssets from "./generatedImageArray";

const Stack = createStackNavigator();

const cacheImages = async () => {
  await Promise.all(
    imageAssets.map(async (image) => {
      await Asset.fromModule(image).downloadAsync();
    })
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time (replace with your actual loading logic)

    // setTimeout(() => {
    //   setLoading(false);
    // }, 20000);

    const loadFont = async () => {
      await Font.loadAsync({
        TitleFont: require("./assets/fonts/JosefinSans-Regular.ttf"),
        TitleFontBold: require("./assets/fonts/JosefinSans-Bold.ttf"),
      });
      setFontLoaded(true);
    };
    loadFont();

    // Cache the images for the HomeScreen
    cacheImages();
    setLoading(false);
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    // TimerProvider enables to have the second counter, to measure the time needed to complete the workout
    // AppProvider saves the data about the user - number of exercies done and total calories counter
    // NavigationContainer enables navigation
    <TimerProvider>
      <AppProvider>
        <NavigationContainer>
          {/* <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          > */}
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {loading ? (
              <Stack.Screen name="Loading" component={LoadingScreen} />
            ) : (
              <Stack.Screen name="Home" component={HomeScreen} />
            )}
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen
              name="ExerciseDifficulty"
              component={SelectedWorkout}
            />
            <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
            <Stack.Screen
              name="WorkoutDetailsScreen"
              component={WorkoutDetailsScreen}
            />
            <Stack.Screen name="RestScreen" component={RestScreen} />
            <Stack.Screen name="WorkoutFinished" component={WorkoutFinished} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </TimerProvider>
  );
}
