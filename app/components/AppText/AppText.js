import React from "react";
import { Text } from "react-native";
import styles from "./style";
import defaultStyles from "../../config/defaultStyles";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
