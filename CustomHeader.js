import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
// import SettingsOverlay from "./SettingsOverlay";
// import { CreditsContext } from "./CreditsContext";
import { Asset } from "expo-asset";

// import { PointsContext } from "./PointsContext";

// Get the height of the device
const windowHeight = Dimensions.get("window").height;

const CustomHeader = ({ title }) => {
  // Cache the credits icon
  // useEffect(() => {
  //   const cacheIcon = async () => {
  //     await Asset.fromModule(require("./assets/credits.png")).downloadAsync();
  //   };
  //   cacheIcon();
  // }, []);

  const navigation = useNavigation();
  // handles the settings overlay
  const [settingsVisible, setSettingsVisible] = useState(false);
  // Import credits info
  // const { credits } = useContext(CreditsContext);

  // Handle the settings overlay
  const handleSettingsButtonPress = () => {
    setSettingsVisible(true);
  };

  const handleCloseSettings = () => {
    setSettingsVisible(false);
  };
  /* // Because on the Android status bar is shown, I want to make a small
      adjustment // to make sure that the status bar is not colliding with
      anything */
  return (
    <View style={styles.header}>
      <Modal
        visible={settingsVisible}
        animationType="slide"
        transparent
        statusBarTranslucent
      >
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <Text style={styles.overlayTextTitle}>Information box</Text>
            <Text style={styles.overlayText}>
              Once you have selected the type of workout, you can choose the
              difficulty level of the exercises:
            </Text>
            <Text style={styles.overlayText}>🥉 Easy</Text>
            <Text style={styles.overlayText}>🥈 Medium</Text>
            <Text style={styles.overlayText}>🥇 Hard</Text>
            <Text style={styles.overlayText}>
              Then, you'll see a list of exercises for chosen difficulty, along
              with estimated completion time and total calories burned.{" "}
            </Text>
            <Text style={styles.overlayText}>
              Begin your workout and pace yourself. Take short breaks between
              exercises to catch your breath.{" "}
            </Text>
            <Text style={styles.overlayText}>Good luck!</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={handleCloseSettings}
              >
                <Text style={styles.buttonText}>Hide</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* Icon on the left (go back) */}
      <TouchableOpacity
        style={[styles.leftButton, styles.button, { marginRight: 10 }]}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" style={[styles.buttonIcon]} />
      </TouchableOpacity>

      {/* Icon next to the one on the left (settings) */}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* Display the credits on the right */}
      {/* <Image
          source={require("./assets/credits.png")}
          style={styles.creditsImage}
        /> */}
      {/* <Text style={styles.creditsText}>{credits}</Text> */}
      {/* <Text style={styles.creditsText}>300000</Text> */}
      <TouchableOpacity
        style={[styles.leftButton, styles.button]}
        onPress={handleSettingsButtonPress}
      >
        {/* <SettingsOverlay
          visible={settingsVisible}
          onClose={handleCloseSettings}
        /> */}
        {/* TODO add info overlay of some sort */}
        <Icon name="info-circle" style={[styles.buttonIcon]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: windowHeight / 11,
    // backgroundColor: "#f7d7ba",
    paddingHorizontal: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: "#ccc",
    marginTop: 20,
    // marginBottom: 10,
    paddingBottom: 15,
  },
  leftButton: {
    // marginRight: 10,
    // padding: 12,
    paddingHorizontal: 14,
    // backgroundColor: "#ebb381",
    // borderRadius: 20,
  },
  // rightButton: {
  //   marginLeft: 10,
  //   padding: 12,
  //   backgroundColor: "#ebb381",
  //   borderRadius: 20,
  // },
  button: {
    // borderWidth: 1,
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 5, // Android
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
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
    // paddingBottom: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row", // Arrange the title and credits in a row
    justifyContent: "space-between", // Space them evenly along the row
    alignItems: "center", // Center them vertically within the header
  },
  creditsText: {
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
    maxWidth: "70%",
    alignSelf: "center",
  },
  creditsContainer: {
    backgroundColor: "#ebb381",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: "row",
    // justifyContent: "space-between", // Space them evenly along the row
    alignItems: "center", // Center them vertically within the header
    maxWidth: 110,
    minWidth: 95,
    maxHeight: 45,
  },
  creditsImage: {
    width: 30,
    height: 30,
    marginRight: 5,
    marginLeft: -5,
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
    // maxHeight: "75%",
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
    // paddingVertical: 2,
    lineHeight: 24,
  },

  buttonYes: {
    backgroundColor: "rgba(56,157,60,1)",
    // paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width: 100,
  },
  buttonCancel: {
    backgroundColor: "rgba(56,64,56,1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
    // width: 100,
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
