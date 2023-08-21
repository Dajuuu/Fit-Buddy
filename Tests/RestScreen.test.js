import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import RestScreen from "../RestScreen";

// Mock navigation functions
const navigateMock = jest.fn();
const goBackMock = jest.fn();

describe("RestScreen tests", () => {
  // Mock the route parameters
  const route = {
    params: {
      exerciseList: [{}, {}],
      currentIndex: 0,
    },
  };

  it("Start the timer with the specified time", () => {
    const { getByText } = render(<RestScreen route={route} />);

    expect(getByText("00:45")).toBeTruthy();
  });

  it("Toggle pause/resume when the appropriate button is pressed", () => {
    const { getByTestId, getByText } = render(<RestScreen route={route} />);

    const pauseButton = getByTestId("pause-resume-button");
    act(() => {
      // Press the pause button
      fireEvent.press(pauseButton);
    });

    // Check that the timer is paused
    expect(getByText("00:45")).toBeTruthy();

    // Press the pause button again
    act(() => {
      fireEvent.press(pauseButton);
    });

    // Check that the timer is resumed
    expect(getByText("00:45")).toBeTruthy();
  });

  it("Toggle between 'pause' and 'play' icons on pause/resume button press", () => {
    const { getByTestId, queryByTestId } = render(<RestScreen route={route} />);

    const pauseResumeButton = getByTestId("pause-resume-button");

    // Initial state: Icon is 'pause'
    expect(queryByTestId("pause-icon")).toBeTruthy();
    expect(queryByTestId("play-icon")).toBeNull();

    // Fire a press event on the pause/resume button
    act(() => {
      fireEvent.press(pauseResumeButton);
    });

    // After pressing, Icon should be 'play'
    expect(queryByTestId("pause-icon")).toBeNull();
    expect(queryByTestId("play-icon")).toBeTruthy();

    // Fire a press event again
    act(() => {
      fireEvent.press(pauseResumeButton);
    });

    // Icon should be back to 'pause'
    expect(queryByTestId("pause-icon")).toBeTruthy();
    expect(queryByTestId("play-icon")).toBeNull();
  });

  it("Trigger navigation action and pass appropriate props on 'Go to the next exercise' button press", () => {
    const { getByTestId } = render(
      <RestScreen
        route={route}
        navigation={{ navigate: navigateMock, goBack: goBackMock }}
      />
    );

    // Fire a press event on the 'Go to the next exercise' button
    const nextExerciseButton = getByTestId("next-exercise-button");
    act(() => {
      fireEvent.press(nextExerciseButton);
    });

    expect(navigateMock).toHaveBeenCalledWith("WorkoutDetailsScreen", {
      exercise: route.params.exerciseList[1],
      exerciseList: route.params.exerciseList,
      currentIndex: route.params.currentIndex + 1,
    });

    // Ensure that goBackMock was called
    expect(goBackMock).toHaveBeenCalled();
  });

  it("Check for correct containerUpperHalf style", () => {
    const { getByTestId } = render(
      <RestScreen
        route={route}
        navigation={{ navigate: navigateMock, goBack: goBackMock }}
      />
    );

    const startButton = getByTestId("container-upper-half");

    expect(startButton).toHaveStyle({
      width: "100%",
      backgroundColor: "rgba(46,89,47,1)",
      position: "absolute",
      top: 0,
    });
  });

  it("Check for correct containerBottomHalf style", () => {
    const { getByTestId } = render(
      <RestScreen
        route={route}
        navigation={{ navigate: navigateMock, goBack: goBackMock }}
      />
    );

    const startButton = getByTestId("container-bottom-half");

    expect(startButton).toHaveStyle({
      width: "100%",
      alignItems: "center",
    });
  });
  it("Take a rest text should be displayed", () => {
    const { getByText } = render(
      <RestScreen
        route={route}
        navigation={{ navigate: navigateMock, goBack: goBackMock }}
      />
    );

    const estimatedTime = getByText("Take a rest");
    expect(estimatedTime).toBeTruthy();
  });
});
