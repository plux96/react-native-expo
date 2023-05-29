import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../components/Card";
import color from "../config/colors";

function CardListScreen(props) {
  return (
    <View style={styles.cardContainer}>
      <Card
        title="Red jacket for sale"
        subtitle="$100"
        image={require("./../assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: color.cardBackgroundColor,
    padding: 20,
    paddingTop: 100,
  },
});

export default CardListScreen;
