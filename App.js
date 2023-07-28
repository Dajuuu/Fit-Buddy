import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./AppContext";
import { TimerProvider } from "./TimerContext";

import HomeScreen from "./HomeScreen";
import SelectedWorkout from "./SelectedWorkout";
import ExerciseScreen from "./ExerciseScreen";
import WorkoutDetailsScreen from "./WorkoutDetailsScreen";
import RestScreen from "./RestScreen";
import WorkoutFinished from "./WorkoutFinished";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TimerProvider>
      <AppProvider>
        <NavigationContainer>
          {/* <StatusBar hidden></StatusBar> */}
          {/* Hide system header for all of the screens */}
          {/* TODO few screen will have header while some will not */}
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
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
            {/* <Stack.Screen name="GameScreen" component={GameScreen} />
            <Stack.Screen name="EasyLevels" component={EasyLevelsScreen} />
            <Stack.Screen name="MediumLevels" component={MediumLevelsScreen} />
            <Stack.Screen name="LevelScreen" component={LevelScreen} />
            <Stack.Screen name="CrosswordScreen" component={CrosswordApp} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </TimerProvider>
  );
}
