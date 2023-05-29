import React from "react";
import styles from "./style";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "../../config/colors";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.swipe}>
        <MaterialCommunityIcons
          color={color.white}
          name="trash-can"
          size={35}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteAction;
