import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render } from "@testing-library/react-native";
import SelectedWorkout from "../SelectedWorkout";

// Mock TimerContext module
jest.mock("../TimerContext", () => ({
  useTimerContext: jest.fn(() => ({
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
  })),
}));

// Mock useNavigation hook
jest.mock("@react-navigation/native");

describe("SelectedWorkout", () => {
  const route = {
    params: {
      workoutDifficulty: "Easy",
      workoutType: "Arms",
    },
  };

  it("should display difficulty container", () => {
    const { getByTestId } = render(<SelectedWorkout route={route} />);

    // Use the testID that you add to an exercise element within the mapping loop
    const exerciseElement = getByTestId("diff-container");

    // Assert that at least one exercise element is found in the rendered component
    expect(exerciseElement).toBeTruthy();
  });
  it("should match expected difficulty levels", () => {
    const { getByText } = render(
      <SelectedWorkout route={{ params: { type: "Arms" } }} />
    );

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
