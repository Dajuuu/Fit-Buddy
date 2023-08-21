import React from "react";
import { render } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../HomeScreen";
import LoadingScreen from "../AppLoading";
import SelectedWorkout from "../SelectedWorkout";
import ExerciseScreen from "../ExerciseScreen";
import RestScreen from "../RestScreen";
import WorkoutFinished from "../WorkoutFinished";

// Mock the useNavigation hook
jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn(),
  };
});

// Mock the AppContext
jest.mock("../AppContext", () => ({
  useAppContext: jest.fn(() => ({
    doneCount: 5,
    totalCaloriesBurnt: 100,
    resetLoadDoneCount: jest.fn(),
    resetTotalCaloriesBurnt: jest.fn(),
  })),
}));

// Mock the useTimerContext
jest.mock("../TimerContext", () => ({
  useTimerContext: jest.fn(() => ({
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
  })),
}));

describe("App Tests", () => {
  it("should have non-empty imageAssets", () => {
    // Import the actual generatedImagePathArray (not mocked)
    const imageAssets = require("../generatedImagePathArray").default;

    // Ensure that imageAssets is not empty
    expect(imageAssets.length).toBeGreaterThan(0);
  });

  it("should have existing font files", () => {
    const regularFontPath = "../assets/fonts/JosefinSans-Regular.ttf";
    const boldFontPath = "../assets/fonts/JosefinSans-Bold.ttf";

    // Check if the font files can be resolved
    expect(() => require.resolve(regularFontPath)).not.toThrow();
    expect(() => require.resolve(boldFontPath)).not.toThrow();
  });
  it("should render HomeScreen", () => {
    // Render the HomeScreen component with the mocked context
    const { root } = render(<HomeScreen />);

    // Check if the rendered component is not null or empty
    expect(root).toBeTruthy();
  });

  it("should render LoadingScreen", () => {
    const { root } = render(<LoadingScreen />);

    // Check if the rendered component is not null or empty
    expect(root).toBeTruthy();
  });
  it("should render SelectedWorkout", () => {
    // Mock the route.params object
    const mockRoute = {
      params: {
        type: "someType", // Replace with the actual value needed for testing
      },
    };

    // Mock the navigation object
    useNavigation.mockReturnValue({
      navigate: jest.fn(),
    });
    // Render the SelectedWorkoutScreen component with the mocked route prop
    const { root } = render(<SelectedWorkout route={mockRoute} />);

    // Check if the rendered component is not null or empty
    expect(root).toBeTruthy();
  });
  it("should render ExerciseScreen", () => {
    // Mock the route.params object
    const mockRoute = {
      params: {
        type: "someType", // Replace with the actual value needed for testing
      },
    };

    // Mock the navigation object
    useNavigation.mockReturnValue({
      navigate: jest.fn(),
    });
    // Render the SelectedWorkoutScreen component with the mocked route prop
    const { root } = render(<ExerciseScreen route={mockRoute} />);

    // Check if the rendered component is not null or empty
    expect(root).toBeTruthy();
  });

  it("should render RestScreen", () => {
    // Mock the route.params object
    const mockRoute = {
      params: {
        type: "someType", // Replace with the actual value needed for testing
      },
    };

    // Mock the navigation object
    useNavigation.mockReturnValue({
      navigate: jest.fn(),
    });
    // Render the SelectedWorkoutScreen component with the mocked route prop
    const { root } = render(<RestScreen route={mockRoute} />);

    // Check if the rendered component is not null or empty
    expect(root).toBeTruthy();
  });

  it("should render WorkoutFinished", () => {
    // Mock the route.params object
    const mockRoute = {
      params: {
        type: "someType", // Replace with the actual value needed for testing
      },
    };

    // Mock the navigation object
    useNavigation.mockReturnValue({
      navigate: jest.fn(),
    });
    // Render the SelectedWorkoutScreen component with the mocked route prop
    const { root } = render(<WorkoutFinished route={mockRoute} />);

    // Check if the rendered component is not null or empty
    expect(root).toBeTruthy();
  });
  //There is not test for the WorkoutDetailsScreen because there were some problems with this
});
