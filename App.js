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

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time (replace with your actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 20000);

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
