import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [doneCount, setDoneCount] = useState(0);

  useEffect(() => {
    // Load the doneCount from AsyncStorage when the app starts
    loadDoneCount();
  }, []);

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

  return (
    <AppContext.Provider
      value={{
        doneCount,
        increaseDoneCount,
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
