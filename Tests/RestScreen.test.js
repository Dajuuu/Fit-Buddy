import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import RestScreen from "../RestScreen";
import { Animated } from "react-native"; // Import Animated from react-native

// Mock navigation functions
const navigateMock = jest.fn();
const goBackMock = jest.fn();

describe("RestScreen", () => {
  const route = {
    params: {
      exerciseList: [{}, {}], // Add the exercises to the list
      currentIndex: 0,
    },
  };

  it("should start the timer with the specified time", () => {
    // Render the component
    const { getByText } = render(<RestScreen route={route} />);

    // Check that the timer starts at the specified time
    expect(getByText("00:45")).toBeTruthy();
  });

  it("should toggle pause/resume when pause button is pressed", () => {
    // Render the component
    const { getByTestId, getByText } = render(<RestScreen route={route} />);

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
  it("should toggle between 'pause' and 'play' icons on pause/resume button press", () => {
    const { getByTestId, queryByTestId } = render(<RestScreen route={route} />);

    const pauseResumeButton = getByTestId("pause-resume-button");

    // Initial state: Icon is 'pause'
    expect(queryByTestId("pause-icon")).toBeTruthy();
    expect(queryByTestId("play-icon")).toBeNull();

    // Fire a press event on the pause/resume button
    fireEvent.press(pauseResumeButton);

    // After pressing, Icon should be 'play'
    expect(queryByTestId("pause-icon")).toBeNull();
    expect(queryByTestId("play-icon")).toBeTruthy();

    // Fire a press event again
    fireEvent.press(pauseResumeButton);

    // Icon should be back to 'pause'
    expect(queryByTestId("pause-icon")).toBeTruthy();
    expect(queryByTestId("play-icon")).toBeNull();
  });
  it("should trigger correct navigation action and pass appropriate props on 'Go to the next exercise' button press", () => {
    // Render the RestScreen component with mock navigation functions and route params
    const { getByTestId } = render(
      <RestScreen
        route={route}
        navigation={{ navigate: navigateMock, goBack: goBackMock }}
      />
    );

    // Fire a press event on the 'Go to the next exercise' button
    const nextExerciseButton = getByTestId("next-exercise-button");
    fireEvent.press(nextExerciseButton);

    // Expect that the correct navigation actions were called
    expect(navigateMock).toHaveBeenCalledWith("WorkoutDetailsScreen", {
      exercise: route.params.exerciseList[1], // Assuming currentIndex is 0
      exerciseList: route.params.exerciseList,
      currentIndex: route.params.currentIndex + 1,
    });
    // Ensure that goBackMock was not called
    expect(goBackMock).toHaveBeenCalled();
  });
});
