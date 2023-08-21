import React from "react";
import { render } from "@testing-library/react-native";
import WorkoutDetailsScreen from "../WorkoutDetailsScreen";
import "@testing-library/jest-native/extend-expect";

// Create empty Jest mock functions for the context functions
const mockIncreaseDoneCount = jest.fn();
const mockIncreaseTotalCaloriesBurnt = jest.fn();
const mockIncreaseCurrentExerciseDone = jest.fn();
const mockIncreaseCurrentCaloriesBurnt = jest.fn();

// Mock AppContext
jest.mock("../AppContext", () => ({
  useAppContext: () => ({
    increaseDoneCount: mockIncreaseDoneCount,
    increaseTotalCaloriesBurnt: mockIncreaseTotalCaloriesBurnt,
    increaseCurrentExerciseDone: mockIncreaseCurrentExerciseDone,
    increaseCurrentCaloriesBurnt: mockIncreaseCurrentCaloriesBurnt,
  }),
}));

describe("WorkoutDetailsScreen tests", () => {
  // Mock the exercise
  const mockExercise = {
    imageSource: require("../assets/icon.png"),
    name: "Mock Exercise",
    repetitionsOrTime: "30 seconds",
  };

  it("Render buttons - Home Button", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise,
          },
        }}
      />
    );

    const backButton = getByTestId("back-button");
    expect(backButton).toBeTruthy();
  });

  it("Render buttons - Previous Button", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise,
          },
        }}
      />
    );

    const previousButton = getByTestId("previous-button");
    expect(previousButton).toBeTruthy();
  });

  it("Render buttons - Done Button", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise,
          },
        }}
      />
    );

    const doneButton = getByTestId("done-button");
    expect(doneButton).toBeTruthy();
  });

  it("Render buttons - Next Button", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise,
          },
        }}
      />
    );

    const nextButton = getByTestId("next-button");
    expect(nextButton).toBeTruthy();
  });
  it("exerciseContainer should be displayed", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise,
          },
        }}
      />
    );

    const exerciseContainer = getByTestId("exercise-container");
    expect(exerciseContainer).toBeTruthy();
  });

  it("Check for correct exerciseImage style", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise,
          },
        }}
      />
    );

    const exerciseImage = getByTestId("exercise-image");

    expect(exerciseImage).toHaveStyle({
      width: "100%",
      height: 300,
    });
  });

  it("Check for correct exerciseName style", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise,
          },
        }}
      />
    );

    const exerciseImage = getByTestId("exercise-name");

    expect(exerciseImage).toHaveStyle({
      fontFamily: "TitleFontBold",
      color: "white",
      marginBottom: 10,
      marginTop: 50,
      paddingHorizontal: 20,
      textAlign: "center",
    });
  });

  it("Check for correct exerciseDetails style", () => {
    const { getByTestId } = render(
      <WorkoutDetailsScreen
        route={{
          params: {
            currentIndex: 0,
            exerciseList: [],
            exercise: mockExercise,
          },
        }}
      />
    );

    const exerciseImage = getByTestId("exercise-details");

    expect(exerciseImage).toHaveStyle({
      padding: 20,
      color: "#449944",
      fontFamily: "TitleFont",
    });
  });
});
