import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import LoadingScreen from "../AppLoading";

// Unit tests
describe("LoadingScreen tests", () => {
  it("Render the LoadingScreen component", () => {
    const { getByTestId } = render(<LoadingScreen />);

    const loadingIndicator = getByTestId("loading-indicator");

    expect(loadingIndicator).toBeTruthy();
  });

  it("Render correct text fields", () => {
    const { getByText } = render(<LoadingScreen />);

    const appName = getByText("FitBuddy");
    const loadingText = getByText("Loading the application");

    expect(appName).toBeTruthy();
    expect(loadingText).toBeTruthy();
  });

  it("Check for correct styles", () => {
    const { getByTestId } = render(<LoadingScreen />);

    const container = getByTestId("container");
    const loadingText = getByTestId("loadingText");
    const appName = getByTestId("appName");

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
