import React from "react";
import { Image, StyleSheet, View } from "react-native";
import color from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={[styles.closeIcon, styles.icon]}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={[styles.deleteIcon, styles.icon]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="white"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("./../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: color.black,
    flex: 1,
  },
  icon: {
    position: "absolute",
    top: 40,
  },
  closeIcon: {
    left: 30,
  },
  deleteIcon: {
    right: 30,
  },
});

export default ViewImageScreen;
