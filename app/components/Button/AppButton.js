import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import color from "../../config/colors";

function AppButton({ title, onPress, colors = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color[colors] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
