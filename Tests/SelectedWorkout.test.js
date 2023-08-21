import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render } from "@testing-library/react-native";
import SelectedWorkout from "../SelectedWorkout";

// Mock useNavigation hook
jest.mock("@react-navigation/native");

// Mock TimerContext
jest.mock("../TimerContext", () => ({
  useTimerContext: jest.fn(() => ({
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
  })),
}));

describe("SelectedWorkout tests", () => {
  // Mock the route parameters
  const route = {
    params: {
      workoutDifficulty: "Easy",
      workoutType: "Arms",
    },
  };

  it("Difficulty container should be displayed", () => {
    const { getByTestId } = render(<SelectedWorkout route={route} />);

    const exerciseElement = getByTestId("diff-container");

    expect(exerciseElement).toBeTruthy();
  });
  it("Expected difficulty levels should be matched", () => {
    const { getByText } = render(<SelectedWorkout route={route} />);

    const expectedDifficulties = [
      "Easy 1",
      "Easy 2",
      "Medium 1",
      "Medium 2",
      "Hard 1",
      "Hard 2",
    ];

    expectedDifficulties.forEach((difficulty) => {
      const difficultyElement = getByText(difficulty);
      expect(difficultyElement).toBeTruthy();
    });
  });
});
