import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import WorkoutFinished from "../WorkoutFinished";
import "@testing-library/jest-native/extend-expect";

// Create mock functions for the context functions
const mockCurrentExerciseDone = 0;
const mockResetCurrentExerciseDoneCount = jest.fn();
const mockCurrentCaloriesBurnt = 0;
const mockResetCurrentCaloriesBurnt = jest.fn();
// Enable fake timers for this test
jest.useFakeTimers();

// Mock Navigation and contexts
const navigation = {
  navigate: jest.fn(),
};

jest.mock("../AppContext", () => ({
  useAppContext: () => ({
    currentExerciseDone: mockCurrentExerciseDone,
    resetCurrentExerciseDoneCount: mockResetCurrentExerciseDoneCount,
    currentCaloriesBurnt: mockCurrentCaloriesBurnt,
    resetCurrentCaloriesBurnt: mockResetCurrentCaloriesBurnt,
  }),
}));

jest.mock("../TimerContext", () => ({
  useTimerContext: jest.fn(() => ({
    startTimer: jest.fn(),
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
  })),
}));

describe("WorkoutDetailsScreen tests", () => {
  // Function to convert the seconds to a correct format
  const formatTotalTime = (secondsTimer) => {
    const minutes = Math.floor(secondsTimer / 60);
    const seconds = secondsTimer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  it("Correct text fields should displayed", () => {
    const { getByText } = render(<WorkoutFinished />);

    const workoutFin = getByText("Workout Finished!");
    const compl = getByText("Completed Exercises: 0");
    const time = getByText("Time: NaN:NaN");

    expect(workoutFin).toBeTruthy();
    expect(compl).toBeTruthy();
    expect(time).toBeTruthy();
  });

  it("Check for correct title style", () => {
    const { getByTestId } = render(<WorkoutFinished />);

    const exerciseImage = getByTestId("title");

    expect(exerciseImage).toHaveStyle({
      fontSize: 36,
      marginBottom: 10,
      color: "white",
      fontFamily: "TitleFontBold",
    });
  });
  it("Check for correct completedExercisesText style", () => {
    const { getByTestId } = render(<WorkoutFinished />);

    const exerciseImage = getByTestId("compl-text");

    expect(exerciseImage).toHaveStyle({
      fontSize: 20,
      marginBottom: 20,
      color: "white",
      fontFamily: "TitleFont",
    });
  });
  it("Check for correct timeAndKcal style", () => {
    const { getByTestId } = render(<WorkoutFinished />);

    const exerciseImage = getByTestId("text");

    expect(exerciseImage).toHaveStyle({
      fontSize: 28,
      marginVertical: 8,
      color: "white",
      fontFamily: "TitleFontBold",
    });
  });
  it("Time should be formated to mm:ss format", () => {
    const secondsTimer = 180; // Example total time in seconds
    const expectedFormattedTime = "03:00"; // Expected formatted time

    const formattedTime = formatTotalTime(secondsTimer);
    expect(formattedTime).toBe(expectedFormattedTime);
  });
  it("Navigate to Home screen when Done button is pressed", () => {
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
