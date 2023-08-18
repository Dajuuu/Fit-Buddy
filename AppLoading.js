import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";

// Get the width of the screen
const windowWidth = Dimensions.get("window").width;

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>FitBuddy</Text>
      <ActivityIndicator
        color="white"
        size="large"
        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
      />
      <Text style={styles.loadingText}>Loading the application</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(40, 44, 46,1)",
  },
  loadingText: {
    fontSize: 18,
    marginTop: 40,
    textAlign: "center",
    color: "white",
    fontFamily: "TitleFont",
  },
  appName: {
    fontSize: 40,
    marginBottom: windowWidth / 3,
    textAlign: "center",
    color: "white",
    fontFamily: "TitleFontBold",
  },
});
