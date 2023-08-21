import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import HomeScreen from "../HomeScreen";

// Mock the contexts
jest.mock("../AppContext", () => ({
  useAppContext: jest.fn(() => ({
    doneCount: 0, // Mocked value for doneCount
    resetLoadDoneCount: jest.fn(),
    resetTotalCaloriesBurnt: jest.fn(),
  })),
}));

jest.mock("../TimerContext", () => ({
  useTimerContext: jest.fn(() => ({
    stopTimer: jest.fn(),
    resetTimer: jest.fn(),
  })),
}));

describe("HomeScreen tests", () => {
  it("Render the HomeScreen component", () => {
    const { getByTestId } = render(<HomeScreen />);

    const homeScreen = getByTestId("homescreen-container");
    expect(homeScreen).toBeTruthy();
  });

  it("Exercises Done and Calories Burnt text fields should be displayed", () => {
    const { getByText } = render(<HomeScreen />);

    const estimatedTime = getByText("Exercises Done:");
    expect(estimatedTime).toBeTruthy();

    const totalKcal = getByText("Calories Burnt:");
    expect(totalKcal).toBeTruthy();
  });

  it("Show overlay when trash bin icon is pressed", () => {
    const { getByTestId } = render(<HomeScreen />);
    const trashBinButton = getByTestId("trash-bin-button");

    fireEvent.press(trashBinButton);

    const overlayElement = getByTestId("overlay");

    expect(overlayElement).toBeVisible();
  });

  it("Check for correct info Container style", () => {
    const { getByTestId } = render(<HomeScreen />);

    const startButton = getByTestId("info-container");

    expect(startButton).toHaveStyle({
      flexDirection: "row",
      width: "95%",
      height: 100,
      borderRadius: 8,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "rgba(24, 27, 32, 1)",
    });
  });
});
