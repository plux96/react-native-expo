import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import IconList from "../components/IconList";
import ListItem from "../components/ListItem";
import color from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    title: "My Listing",
    icon: { name: "format-list-bulleted", backgroundColor: color.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: color.secondary },
  },
];

function MyProfileScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Rustamov Umedjon"
          subtitle="rustamov@gmail.com"
          image={require("./../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <IconList
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View>
        <ListItem
          title="Log Out"
          IconComponent={<IconList name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: color.light,
  },
});
export default MyProfileScreen;
