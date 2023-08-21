import React from "react";
import "@testing-library/jest-native/extend-expect";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native"; // Import NavigationContainer
import CustomHeader from "../CustomHeader";

// Wrap your components in a NavigationContainer
const renderWithNavigation = (children) => {
  return render(<NavigationContainer>{children}</NavigationContainer>);
};

describe("CustomHeader styles", () => {
  it("header should have the correct styling", () => {
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

  it("should have the correct text color for title", () => {
    const { getByText } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    const titleText = getByText("Header Title");

    expect(titleText).toHaveStyle({ color: "white" });
  });

  it("should have the correct icon color", () => {
    const { getAllByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );

    const iconElements = getAllByTestId("icon");

    iconElements.forEach((icon) => {
      expect(icon).toHaveStyle({ color: "white" });
    });
  });

  it("should have the correct overlay styles", async () => {
    const { getByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    // In this modified test, I've added fireEvent.press(infoButton) to simulate clicking the info button that opens the modal. Then I've used waitFor to wait until the overlay becomes visible, and then you can assert its styles. This ensures that the test waits for the state changes to be applied before making assertions on the DOM.
    const infoButton = getByTestId("settings-button");
    fireEvent.press(infoButton); // Simulate opening the modal

    await waitFor(() => {
      const overlay = getByTestId("overlay"); // Wait for the overlay to be visible
      expect(overlay).toHaveStyle({
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
      });
    });
  });

  it("should have the correct overlay content styles", async () => {
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

  it("should have the correct overlay text styles", async () => {
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

  it("should render the CustomHeader component", () => {
    const { getByTestId } = renderWithNavigation(
      <CustomHeader title="Header Title" />
    );
    const header = getByTestId("custom-header");
    expect(header).toBeTruthy();
  });

  it("should handle the settings button press and show overlay", () => {
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

  it("should hide the overlay when 'Hide' button is pressed", () => {
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
