import React from "react";
import Screen from "../components/Screen";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import color from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: "$100",
    image: require("./../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Red Jacket for sale",
    price: "$500",
    image: require("./../assets/couch.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subtitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: color.light,
  },
});

export default ListingScreen;
