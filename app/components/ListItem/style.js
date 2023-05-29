import { StyleSheet } from "react-native";
import color from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: color.white,
    alignItems: "center",
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: color.medium,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },
});

export default styles;
