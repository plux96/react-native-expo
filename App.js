import { StyleSheet, Platform, StatusBar, View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/Button";
import CardListScreen from "./app/screens/CardListScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyProfileScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppSwitch from "./app/components/AppSwitch";
import AppPicker from "./app/components/AppPicker";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    // <View style={styles.container}>
    //   {/* <View style={styles.box}>
    //     <View style={styles.insideBox}></View>
    //   </View>
    //   <View style={styles.otherBox}></View> */}
    //   {/* <AppText style={styles.text}>
    //     I love React Native, This is first my React app
    //   </AppText> */}
    //   {/* <MaterialCommunityIcons name="email" size={200} color="dodgerblue" /> */}
    //   {/* <AppText>I love React Native</AppText>
    //   <AppButton title="Login" /> */}
    // </View>
    // <WelcomeScreen />
    // <CardListScreen />
    // <ListingDetailsScreen />
    // <ViewImageScreen />
    // <MessagesScreen />
    // <MyProfileScreen />
    // <ListingScreen />
    // <Screen>
    //   {/* <AppTextInput placeholder="Username" icon="email" /> */}
    //   {/* <AppSwitch /> */}
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectedItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput placeholder="Username" icon="email" />
    // </Screen>
    // <LoginScreen />
    <ListingDetailsScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  box: {
    backgroundColor: "dodgerblue",
    width: 100,
    height: 100,
    // borderWidth: 10,
    // borderColor: "royalblue",
    // borderRadius: 50,
    // shadowColor: "grey",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    padding: 20,
    paddingHorizontal: 10,
    paddingLeft: 30,
  },
  insideBox: {
    backgroundColor: "gold",
    width: 50,
    height: 50,
  },
  otherBox: {
    backgroundColor: "tomato",
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    // fontFamily: "Roboto",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "600",
    color: "tomato",
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 60,
    // textDecorationLine: "line-through",
  },
});
