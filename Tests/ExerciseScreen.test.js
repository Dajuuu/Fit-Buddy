import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render } from "@testing-library/react-native";
import ExerciseScreen from "../ExerciseScreen";

// Mock useNavigation hook
jest.mock("@react-navigation/native");

// Mock TimerContext module
jest.mock("../TimerContext", () => ({
  useTimerContext: jest.fn(() => ({
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
  })),
}));

describe("ExerciseScreen tests", () => {
  // Mock the route parameters
  const route = {
    params: {
      workoutDifficulty: "Easy",
      workoutType: "Arms",
    },
  };

  it('The "Start the workout" button should be displayed', () => {
    const { getByTestId } = render(<ExerciseScreen route={route} />);

    const startButton = getByTestId("start-button");

    expect(startButton).toBeTruthy();
  });

  it("Estimated time and total kcal information should be displayed", () => {
    const { getByText } = render(<ExerciseScreen route={route} />);

    const estimatedTime = getByText("Estimated Time:");
    expect(estimatedTime).toBeTruthy();

    const totalKcal = getByText("Total Kcal:");
    expect(totalKcal).toBeTruthy();
  });

  it("Exercises container/list should be displayed", () => {
    const { getByTestId } = render(<ExerciseScreen route={route} />);

    const exerciseElement = getByTestId("exercise-container");

    expect(exerciseElement).toBeTruthy();
  });

  it("Check for correct Start button style", () => {
    const { getByTestId } = render(<ExerciseScreen route={route} />);

    const startButton = getByTestId("start-button");

    expect(startButton).toHaveStyle({
      position: "absolute",
      backgroundColor: "rgba(56,157,60,1)",
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 30,
    });
  });

  it("Check for correct Info container button style", () => {
    const { getByTestId } = render(<ExerciseScreen route={route} />);

    const infoContainer = getByTestId("info-container");

    expect(infoContainer).toHaveStyle({
      width: "90%",
      height: 100,
      borderRadius: 8,
      alignItems: "center",
      backgroundColor: "rgba(24, 27, 32, 1)",
    });
  });
});
