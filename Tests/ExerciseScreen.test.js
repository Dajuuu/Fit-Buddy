import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import ExerciseScreen from "../ExerciseScreen";

// Mock TimerContext module
jest.mock("../TimerContext", () => ({
  useTimerContext: jest.fn(() => ({
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
  })),
}));

// Mock useNavigation hook
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("ExerciseScreen", () => {
  const route = {
    params: {
      workoutDifficulty: "Easy",
      workoutType: "Arms",
    },
  };

  it("should display estimated time and total kcal information", () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <ExerciseScreen route={route} />
      </NavigationContainer>
    );

    const estimatedTime = getByText("Estimated Time:");
    expect(estimatedTime).toBeTruthy();

    const totalKcal = getByText("Total Kcal:");
    expect(totalKcal).toBeTruthy();
  });
});
