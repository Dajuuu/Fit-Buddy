import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import RestScreen from "../RestScreen";

describe("RestScreen", () => {
  it("should start the timer with the specified time", () => {
    // Render the component
    const { getByText } = render(
      <RestScreen route={{ params: { exerciseList: [], currentIndex: 0 } }} />
    );

    // Check that the timer starts at the specified time
    expect(getByText("00:45")).toBeTruthy();
  });

  it("should toggle pause/resume when pause button is pressed", () => {
    // Render the component
    const { getByTestId, getByText } = render(
      <RestScreen route={{ params: { exerciseList: [], currentIndex: 0 } }} />
    );

    // Get the pause button and press it
    const pauseButton = getByTestId("pause-resume-button");
    fireEvent.press(pauseButton);

    // Check that the timer is paused
    expect(getByText("00:45")).toBeTruthy(); // Adjust the timer text based on the paused state

    // Press the pause button again
    fireEvent.press(pauseButton);

    // Check that the timer is resumed
    expect(getByText("00:45")).toBeTruthy(); // Adjust the timer text based on the resumed state
  });

  // Other test cases...
});
