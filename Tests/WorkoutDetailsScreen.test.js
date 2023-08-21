import React from "react";
import { render } from "@testing-library/react-native";
import WorkoutDetailsScreen from "../WorkoutDetailsScreen"; // Import the correct path
import "@testing-library/jest-native/extend-expect";

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

  it("should render buttons = Home Button", () => {
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
    // const previousButton = getByTestId("previous-button");
    // const doneButton = getByTestId("done-button");
    // const nextButton = getByTestId("next-button");

    // Assert that all buttons are visible
    expect(backButton).toBeTruthy();
    // expect(previousButton).toBeTruthy();
    // expect(doneButton).toBeTruthy();
    // expect(nextButton).toBeTruthy();
  });

  it("should render buttons = Previous Button", () => {
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

    const previousButton = getByTestId("previous-button");
    // const doneButton = getByTestId("done-button");
    // const nextButton = getByTestId("next-button");

    // Assert that all buttons are visible
    expect(previousButton).toBeTruthy();
    // expect(doneButton).toBeTruthy();
    // expect(nextButton).toBeTruthy();
  });
  it("should render buttons = Done Button", () => {
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

    const doneButton = getByTestId("done-button");
    // const nextButton = getByTestId("next-button");

    // Assert that all buttons are visible
    expect(doneButton).toBeTruthy();
    // expect(nextButton).toBeTruthy();
  });
  it("should render buttons = Next Button", () => {
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

    const nextButton = getByTestId("next-button");

    // Assert that all buttons are visible
    expect(nextButton).toBeTruthy();
  });
  it("should render exerciseContainer", () => {
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

    const exerciseContainer = getByTestId("exercise-container");
    expect(exerciseContainer).toBeTruthy(); // Assert that the exerciseContainer is visible
  });

  it("should have the correct exerciseImage style", () => {
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

    const exerciseImage = getByTestId("exercise-image");

    expect(exerciseImage).toHaveStyle({
      width: "100%",
      height: 300,
    });
  });

  it("should have the correct exerciseName style", () => {
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

  it("should have the correct exerciseDetails style", () => {
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

    const exerciseImage = getByTestId("exercise-details");

    expect(exerciseImage).toHaveStyle({
      padding: 20,
      color: "#449944",
      fontFamily: "TitleFont",
    });
  });
});
