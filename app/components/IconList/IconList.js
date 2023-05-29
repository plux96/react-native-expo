import React from "react";
import styles from "./style";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconList({
  name,
  backgroundColor = "#000",
  iconColor = "#fff",
  size = 40,
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
        },
        styles.icon,
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default IconList;
