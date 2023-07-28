import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [doneCount, setDoneCount] = useState(0);
  const [totalCaloriesBurnt, setTotalCaloriesBurnt] = useState(0);
  const [currentExerciseDone, setCurrentExerciseDone] = useState(false);

  useEffect(() => {
    // Load the doneCount from AsyncStorage when the app starts
    loadDoneCount();
    loadTotalCaloriesBurnt();
  }, []);

  const increaseCurrentExerciseDone = () => {
    setCurrentExerciseDone((prevCount) => prevCount + 1);
  };

  const resetCurrentExerciseDoneCount = () => {
    setCurrentExerciseDone(0);
  };

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

  const increaseDoneCount = async () => {
    try {
      const newCount = doneCount + 1;
      await AsyncStorage.setItem("doneCount", newCount.toString());
      setDoneCount(newCount);
    } catch (error) {
      console.error("Error saving doneCount to AsyncStorage:", error);
    }
  };

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
    <AppContext.Provider
      value={{
        doneCount,
        increaseDoneCount,
        totalCaloriesBurnt,
        increaseTotalCaloriesBurnt,
        currentExerciseDone,
        increaseCurrentExerciseDone,
        resetCurrentExerciseDoneCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// Function to use the AppContext
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
