import React, { useState } from "react";
import styles from "./style";
import { TouchableOpacity } from "react-native";
import AppText from "../AppText";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;
