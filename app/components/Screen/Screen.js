import React from "react";
import styles from "./style";
import { SafeAreaView, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style, { backgroundColor: "yellow" }]}>
      <View style={[style, { backgroundColor: "orange" }]}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
