import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import CustomHeader from "../CustomHeader";

// Wrap components in a NavigationContainer
const renderWithNavigation = (children) => {
  return render(<NavigationContainer>{children}</NavigationContainer>);
};

// Unit tests
describe("CustomHeader tests", () => {
  it("Render the CustomHeader component", () => {
    const { getByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    const header = getByTestId("custom-header");
    expect(header).toBeTruthy();
  });

  it("Header have correct styling", () => {
    const { getByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    const header = getByTestId("custom-header");

    expect(header).toHaveStyle({
      flexDirection: "row",
      alignItems: "flex-end",
      paddingHorizontal: 20,
      marginTop: 20,
      paddingBottom: 15,
    });
  });

  it("Correct text color for the title", () => {
    const { getByText } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    const titleText = getByText("Header Title");

    expect(titleText).toHaveStyle({ color: "white" });
  });

  it("Correct color for the icons", () => {
    const { getAllByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );

    const iconElements = getAllByTestId("icon");

    iconElements.forEach((icon) => {
      expect(icon).toHaveStyle({ color: "white" });
    });
  });

  it("Correct overlay style", async () => {
    const { getByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    // fireEvent.press() was added to simulate clicking the info button that opens the modal
    // this way it is possible to check the overlay's styling
    const infoButton = getByTestId("settings-button");
    fireEvent.press(infoButton); // Simulate opening the modal

    await waitFor(() => {
      const overlay = getByTestId("overlay");
      expect(overlay).toHaveStyle({
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
      });
    });
  });

  it("Correct overlay content style", async () => {
    const { getByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );

    const infoButton = getByTestId("settings-button");
    fireEvent.press(infoButton); // Simulate opening the modal

    await waitFor(() => {
      const overlayContent = getByTestId("overlay-content");
      expect(overlayContent).toHaveStyle({
        backgroundColor: "rgba(40, 44, 46,1)",
        width: "85%",
      });
    });
  });

  it("Correct overlay text style", async () => {
    const { getByTestId, getAllByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );

    const infoButton = getByTestId("settings-button");
    fireEvent.press(infoButton); // Simulate opening the modal

    await waitFor(() => {
      const overlayTextElements = getAllByTestId("overlay-text");
      overlayTextElements.forEach((text) => {
        expect(text).toHaveStyle({
          fontSize: 18,
          textAlign: "center",
          color: "white",
          fontFamily: "TitleFont",
          lineHeight: 24,
        });
      });
    });
  });

  it("Handle the settings button press and show overlay", () => {
    const { getByTestId, getByText } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    const settingsButton = getByTestId("settings-button");
    fireEvent.press(settingsButton);

    const overlay = getByTestId("overlay");
    const overlayTitle = getByText("Information box");
    expect(overlay).toBeTruthy();
    expect(overlayTitle).toBeTruthy();
  });

  it("Hide the overlay when 'Hide' button is pressed", () => {
    const { getByTestId, queryByText } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    const settingsButton = getByTestId("settings-button");
    fireEvent.press(settingsButton);

    const hideButton = getByTestId("hide-button");
    fireEvent.press(hideButton);

    const overlay = queryByText("Information box");
    expect(overlay).toBeNull();
  });
});
