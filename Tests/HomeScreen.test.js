import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import HomeScreen from "../HomeScreen";

// Mock the dependencies
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

describe("HomeScreen", () => {
  it("should render the HomeScreen component", () => {
    const { getByTestId } = render(<HomeScreen />);

    const homeScreen = getByTestId("homescreen-container");
    expect(homeScreen).toBeTruthy();
  });
  it("should display Exercises Done and Calories Burnt text", () => {
    const { getByText } = render(<HomeScreen />);

    const estimatedTime = getByText("Exercises Done:");
    expect(estimatedTime).toBeTruthy();

    const totalKcal = getByText("Calories Burnt:");
    expect(totalKcal).toBeTruthy();
  });

  it("should show overlay when trash bin icon is pressed", () => {
    const { getByTestId } = render(<HomeScreen />);
    const trashBinButton = getByTestId("trash-bin-button");

    fireEvent.press(trashBinButton);

    // Get the overlay element
    const overlayElement = getByTestId("overlay"); // Make sure you have set the testID in your component

    // Assert that the overlay is shown (you can check its style or visibility)
    expect(overlayElement).toBeVisible(); // You can adjust this assertion as needed
  });

  it("should have the correct info Container style", () => {
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
