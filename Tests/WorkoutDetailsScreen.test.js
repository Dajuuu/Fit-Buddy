import React from "react";
import { render } from "@testing-library/react-native";
import WorkoutDetailsScreen from "../WorkoutDetailsScreen"; // Import the correct path

// Create empty Jest mock functions for the context functions
const mockIncreaseDoneCount = jest.fn();
const mockIncreaseTotalCaloriesBurnt = jest.fn();
const mockIncreaseCurrentExerciseDone = jest.fn();
const mockIncreaseCurrentCaloriesBurnt = jest.fn();

jest.mock("../AppContext", () => ({
  useAppContext: () => ({
    increaseDoneCount: mockIncreaseDoneCount,
    increaseTotalCaloriesBurnt: mockIncreaseTotalCaloriesBurnt,
    increaseCurrentExerciseDone: mockIncreaseCurrentExerciseDone,
    increaseCurrentCaloriesBurnt: mockIncreaseCurrentCaloriesBurnt,
  }),
}));

describe("WorkoutDetailsScreen", () => {
  const mockExercise = {
    imageSource: "mock-image-path.jpg", // Provide a valid image path
    name: "Mock Exercise", // Provide a valid exercise name
    repetitionsOrTime: "30 seconds", // Provide valid exercise details
  };

  it("should render buttons", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise, // Pass the mock exercise object
          },
        }}
      />
    );

    const backButton = getByTestId("back-button");
    const previousButton = getByTestId("previous-button");
    const doneButton = getByTestId("done-button");
    const nextButton = getByTestId("next-button");

    // Assert that all buttons are visible
    expect(backButton).toBeTruthy();
    expect(previousButton).toBeTruthy();
    expect(doneButton).toBeTruthy();
    expect(nextButton).toBeTruthy();
  });
});
