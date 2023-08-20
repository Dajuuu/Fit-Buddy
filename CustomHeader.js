import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

// Get the height of the device
const windowHeight = Dimensions.get("window").height;

const CustomHeader = ({ title }) => {
  // Access the Navigation
  const navigation = useNavigation();
  // handles the settings overlay
  const [settingsVisible, setSettingsVisible] = useState(false);

  // Handle the settings overlay
  const handleSettingsButtonPress = () => {
    setSettingsVisible(true);
  };

  const handleCloseSettings = () => {
    setSettingsVisible(false);
  };

  return (
    <View style={styles.header} testID="custom-header">
      {/* Declare the type of modal - needed for settings overlay */}
      <Modal
        visible={settingsVisible}
        animationType="slide"
        transparent
        statusBarTranslucent
      >
        <View style={styles.overlay} testID="overlay">
          <View style={styles.overlayContent} testID="overlay-content">
            <Text style={styles.overlayTextTitle}>Information box</Text>
            <Text style={styles.overlayText} testID="overlay-text">
              Once you have selected the type of workout, you can choose the
              difficulty level of the exercises:
            </Text>
            <Text style={styles.overlayText}>🥉 Easy</Text>
            <Text style={styles.overlayText}>🥈 Medium</Text>
            <Text style={styles.overlayText}>🥇 Hard</Text>
            <Text style={styles.overlayText}>
              Then, you will see a list of exercises for chosen difficulty,
              along with estimated completion time. Total calories are also
              visible, except for Yoga.{" "}
            </Text>
            <Text style={styles.overlayText}>
              Begin your workout and pace yourself. Take short breaks between
              exercises to catch your breath.{" "}
            </Text>
            <Text style={styles.overlayText}>Good luck!</Text>

            {/* Hide button */}
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={handleCloseSettings}
              testID="hide-button"
            >
              <Text style={styles.buttonText}>Hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Header UI */}
      {/* Icon on the left (go back) */}
      <TouchableOpacity
        style={styles.buttonsSpacing}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" style={styles.buttonIcon} testID="icon" />
      </TouchableOpacity>

      {/* Icon on the right (info) */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonsSpacing}
        onPress={handleSettingsButtonPress}
      >
        <Icon
          name="info-circle"
          style={styles.buttonIcon}
          testID="settings-button"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: windowHeight / 11,
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 15,
  },
  buttonsSpacing: {
    paddingHorizontal: 14,
  },
  buttonIcon: {
    fontSize: 26,
    color: "white",
  },
  title: {
    fontSize: 23,
    flex: 1,
    textAlign: "center",
    color: "white",
    fontFamily: "TitleFontBold",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContent: {
    backgroundColor: "rgba(40, 44, 46,1)",
    padding: 15,
    paddingVertical: 20,
    borderRadius: 8,
    width: "85%",
  },
  overlayTextTitle: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    fontFamily: "TitleFontBold",
  },
  overlayText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    color: "white",
    fontFamily: "TitleFont",
    lineHeight: 24,
  },
  buttonCancel: {
    backgroundColor: "rgba(56,64,56,1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 23,
    justifyContent: "center",
    alignSelf: "center",
    fontFamily: "TitleFont",
  },
});

export default CustomHeader;
