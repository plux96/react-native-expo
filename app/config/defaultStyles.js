import { StyleSheet } from "react-native";
import colors from "./colors";
export default {
  text: {
    fontSize: 20,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};
