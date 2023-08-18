import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // Declare all hooks
  const [doneCount, setDoneCount] = useState(0);
  const [totalCaloriesBurnt, setTotalCaloriesBurnt] = useState(0);
  const [currentExerciseDone, setCurrentExerciseDone] = useState(0);
  const [currentCaloriesBurnt, setCurrentCaloriesBurnt] = useState(0);

  useEffect(() => {
    // Load the doneCount andtotalCaloriesBurnt from AsyncStorage when the app starts
    loadDoneCount();
    loadTotalCaloriesBurnt();
  }, []);

  // Increase Current Exercise - it a temporary variable that saves how many exercises were completed
  // by the user in a current workout they are doing
  const increaseCurrentExerciseDone = () => {
    setCurrentExerciseDone((prevCount) => prevCount + 1);
  };

  // Reset Current Exercise Done Count - when the workout is finished, the temporary variable is reset
  const resetCurrentExerciseDoneCount = () => {
    setCurrentExerciseDone(0);
  };

  // Increase Current Calories Burnt - simmilar to the function above, it a temporary variable that saves calories value.
  // When user completes given exercise, the associated value of kcal estimate is being assigned to that variable
  const increaseCurrentCaloriesBurnt = (calories) => {
    const newTotalCalories = currentCaloriesBurnt + calories;
    setCurrentCaloriesBurnt(newTotalCalories);
    return newTotalCalories;
  };

  // Reset Current Calories Burnt - when the workout is finished, the temporary variable is reset
  const resetCurrentCaloriesBurnt = () => {
    setCurrentCaloriesBurnt(0);
  };

  // Reset Load Done Count - on the home screen there is a trash bin icon -
  // this function clears the total number of exercises done by the user
  const resetLoadDoneCount = () => {
    setDoneCount(0);
  };
  // Reset Total Calories Burnt - on the home screen there is a trash bin icon -
  // this function clears the total number of calories burnt done by the user
  const resetTotalCaloriesBurnt = () => {
    setTotalCaloriesBurnt(0);
  };

  // ---***---
  // AsyncStorage function for exercises done counter
  // Load the saved counter (when app loads)
  const loadDoneCount = async () => {
    try {
      const count = await AsyncStorage.getItem("doneCount");
      if (count) {
        setDoneCount(parseInt(count));
      }
    } catch (error) {
      console.error("Error loading doneCount from AsyncStorage:", error);
    }
  };

  // This is a function that increases global exercise done counter
  const increaseDoneCount = async () => {
    try {
      const newCount = doneCount + 1;
      await AsyncStorage.setItem("doneCount", newCount.toString());
      setDoneCount(newCount);
    } catch (error) {
      console.error("Error saving doneCount to AsyncStorage:", error);
    }
  };

  // Load the total calories burnt counter (when app loads)
  const loadTotalCaloriesBurnt = async () => {
    try {
      const totalCalories = await AsyncStorage.getItem("totalCaloriesBurnt");
      if (totalCalories) {
        setTotalCaloriesBurnt(parseInt(totalCalories));
      }
    } catch (error) {
      console.error(
        "Error loading totalCaloriesBurnt from AsyncStorage:",
        error
      );
    }
  };

  // This is a function that increases global calories counter
  const increaseTotalCaloriesBurnt = async (calories) => {
    try {
      const newTotalCalories = totalCaloriesBurnt + calories;
      await AsyncStorage.setItem(
        "totalCaloriesBurnt",
        newTotalCalories.toString()
      );
      setTotalCaloriesBurnt(newTotalCalories);
    } catch (error) {
      console.error("Error saving totalCaloriesBurnt to AsyncStorage:", error);
    }
  };

  return (
    // Pass all needed variables/functions that will be used by other files within the app
    <AppContext.Provider
      value={{
        doneCount,
        increaseDoneCount,
        totalCaloriesBurnt,
        increaseTotalCaloriesBurnt,
        currentExerciseDone,
        increaseCurrentExerciseDone,
        resetCurrentExerciseDoneCount,
        currentCaloriesBurnt,
        increaseCurrentCaloriesBurnt,
        resetCurrentCaloriesBurnt,
        resetLoadDoneCount,
        resetTotalCaloriesBurnt,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// Function to use the AppContext, to pass all information
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
