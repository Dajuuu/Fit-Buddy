import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import SelectedWorkout from "./SelectedWorkout";
import ExerciseScreen from "./ExerciseScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
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
        <Stack.Screen name="ExerciseDifficulty" component={SelectedWorkout} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        {/* <Stack.Screen name="GameScreen" component={GameScreen} />
            <Stack.Screen name="EasyLevels" component={EasyLevelsScreen} />
            <Stack.Screen name="MediumLevels" component={MediumLevelsScreen} />
            <Stack.Screen name="LevelScreen" component={LevelScreen} />
            <Stack.Screen name="CrosswordScreen" component={CrosswordApp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
