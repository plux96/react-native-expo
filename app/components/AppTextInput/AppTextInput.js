import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";

function AppTextInput({ icon, ...otherProps }) {
  const [fisrtName, setFirstName] = useState("");
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={color.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

export default AppTextInput;
