import React from "react";
import { render } from "@testing-library/react-native";
import HomeScreen from "../HomeScreen";

// jest.mock("../AppContext");
jest.mock("../AppContext", () => ({
  useAppContext: jest.fn(() => ({
    doneCount: 5, // Provide the values that your HomeScreen expects
    totalCaloriesBurnt: 100,
    resetLoadDoneCount: jest.fn(),
    resetTotalCaloriesBurnt: jest.fn(),
  })),
}));

// Mock the useTimerContext function (if needed)
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
    // Render the HomeScreen component
    // Render the HomeScreen component with the mocked context
    const { root } = render(<HomeScreen />);

    // Check if the rendered component is not null or empty
    expect(root).toBeTruthy();
  });
});
