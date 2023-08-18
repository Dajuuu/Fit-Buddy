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
    // TimerProvider enables to have the second counter, to measure the time needed to complete the workout
    // AppProvider saves the data about the user - number of exercies done and total calories counter
    // NavigationContainer enables navigation
    <TimerProvider>
      <AppProvider>
        <NavigationContainer>
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
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </TimerProvider>
  );
}
