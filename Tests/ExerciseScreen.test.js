import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render } from "@testing-library/react-native";
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
jest.mock("@react-navigation/native");

describe("ExerciseScreen", () => {
  const route = {
    params: {
      workoutDifficulty: "Easy",
      workoutType: "Arms",
    },
  };

  it('should display the "Start the workout" button', () => {
    const { getByTestId } = render(<ExerciseScreen route={route} />);

    const startButton = getByTestId("start-button");

    // Assert that the "Start the workout" button is found in the rendered component
    expect(startButton).toBeTruthy();
  });
  it("should display estimated time and total kcal information", () => {
    const { getByText } = render(<ExerciseScreen route={route} />);

    const estimatedTime = getByText("Estimated Time:");
    expect(estimatedTime).toBeTruthy();

    const totalKcal = getByText("Total Kcal:");
    expect(totalKcal).toBeTruthy();
  });
  it("should display exercise container", () => {
    const { getByTestId } = render(<ExerciseScreen route={route} />);

    // Use the testID that you add to an exercise element within the mapping loop
    const exerciseElement = getByTestId("exercise-container");

    // Assert that at least one exercise element is found in the rendered component
    expect(exerciseElement).toBeTruthy();
  });

  it("should have the correct Start button style", () => {
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

  it("should have the correct Info container button style", () => {
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
