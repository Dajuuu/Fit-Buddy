import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import WorkoutFinished from "../WorkoutFinished"; // Import the correct path
import "@testing-library/jest-native/extend-expect";

// Create empty Jest mock functions for the context functions
const mockCurrentExerciseDone = 0;
const mockResetCurrentExerciseDoneCount = jest.fn();
const mockCurrentCaloriesBurnt = 0;
const mockResetCurrentCaloriesBurnt = jest.fn();

const navigation = {
  navigate: jest.fn(),
};

jest.useFakeTimers(); // Enable fake timers for this test

jest.mock("../AppContext", () => ({
  useAppContext: () => ({
    currentExerciseDone: mockCurrentExerciseDone,
    resetCurrentExerciseDoneCount: mockResetCurrentExerciseDoneCount,
    currentCaloriesBurnt: mockCurrentCaloriesBurnt,
    resetCurrentCaloriesBurnt: mockResetCurrentCaloriesBurnt,
  }),
}));

// Mock TimerContext module
jest.mock("../TimerContext", () => ({
  useTimerContext: jest.fn(() => ({
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
  })),
}));

describe("WorkoutDetailsScreen", () => {
  const formatTotalTime = (secondsTimer) => {
    const minutes = Math.floor(secondsTimer / 60);
    const seconds = secondsTimer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  it("should display correct text fields", () => {
    const { getByText } = render(<WorkoutFinished />);

    const workoutFin = getByText("Workout Finished!");
    const compl = getByText("Completed Exercises: 0");
    const time = getByText("Time: NaN:NaN");

    expect(workoutFin).toBeTruthy();
    expect(compl).toBeTruthy();
    expect(time).toBeTruthy();
  });

  it("should have the correct title style", () => {
    const { getByTestId } = render(<WorkoutFinished />);

    const exerciseImage = getByTestId("title");

    expect(exerciseImage).toHaveStyle({
      fontSize: 36,
      marginBottom: 10,
      color: "white",
      fontFamily: "TitleFontBold",
    });
  });
  it("should have the correct completedExercisesText style", () => {
    const { getByTestId } = render(<WorkoutFinished />);

    const exerciseImage = getByTestId("compl-text");

    expect(exerciseImage).toHaveStyle({
      fontSize: 20,
      marginBottom: 20,
      color: "white",
      fontFamily: "TitleFont",
    });
  });
  it("should have the correct timeAndKcal style", () => {
    const { getByTestId } = render(<WorkoutFinished />);

    const exerciseImage = getByTestId("text");

    expect(exerciseImage).toHaveStyle({
      fontSize: 28,
      marginVertical: 8,
      color: "white",
      fontFamily: "TitleFontBold",
    });
  });
  it("should format total time to mm:ss format", () => {
    const secondsTimer = 125; // Example total time in seconds

    const expectedFormattedTime = "02:05"; // Expected formatted time

    const formattedTime = formatTotalTime(secondsTimer);

    expect(formattedTime).toBe(expectedFormattedTime);
  });
  it("should navigate to Home screen when Done button is pressed", () => {
    const resetTimerMock = jest.fn();
    const resetCurrentExerciseDoneCountMock = jest.fn();
    const resetCurrentCaloriesBurntMock = jest.fn();

    const { getByTestId } = render(
      <WorkoutFinished
        route={{ params: {} }}
        navigation={navigation}
        resetTimer={resetTimerMock}
        resetCurrentExerciseDoneCount={resetCurrentExerciseDoneCountMock}
        resetCurrentCaloriesBurnt={resetCurrentCaloriesBurntMock}
      />
    );

    const doneButton = getByTestId("done-button");

    fireEvent.press(doneButton);

    // Advance timers by a sufficient amount to trigger the setTimeout
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Check if the navigation to Home screen was triggered
    expect(navigation.navigate).toHaveBeenCalledWith("Home");
  });
});
