import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import LoadingScreen from "../AppLoading";

describe("LoadingScreen", () => {
  it("should render the LoadingScreen component", () => {
    const { getByText, getByTestId } = render(<LoadingScreen />);

    const appName = getByText("FitBuddy");
    const loadingIndicator = getByTestId("loading-indicator"); // Use the correct test ID here
    const loadingText = getByText("Loading the application");

    expect(appName).toBeTruthy();
    expect(loadingIndicator).toBeTruthy();
    expect(loadingText).toBeTruthy();
  });

  it("should have the correct styles", () => {
    const { getByTestId } = render(<LoadingScreen />);

    const container = getByTestId("container"); // Use the correct test ID here
    const loadingText = getByTestId("loadingText"); // Use the correct test ID here
    const appName = getByTestId("appName"); // Use the correct test ID here

    expect(container).toHaveStyle({
      backgroundColor: "rgba(40, 44, 46,1)",
      alignItems: "center",
      justifyContent: "center",
    });
    expect(loadingText).toHaveStyle({
      color: "white",
      fontFamily: "TitleFontBold",
    });
    expect(appName).toHaveStyle({
      color: "white",
      fontFamily: "TitleFont",
      textAlign: "center",
    });
  });
});
