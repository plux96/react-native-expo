import { StyleSheet } from "react-native";
import color from "../../config/colors";

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    backgroundColor: color.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
    marginVertical: 10,
  },
  text: {
    color: color.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: 600,
  },
});

export default styles;
