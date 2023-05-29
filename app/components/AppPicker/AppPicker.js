import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import defaultStyles from "../../config/defaultStyles";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppText from "../AppText";
import Screen from "../Screen";
import PickerItem from "../PickerItem";

function AppPicker({ icon, placeholder, items, onSelectedItem, selectedItem }) {
  const [modalVisable, setModalVisable] = useState(false);
  //  console.log(items);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisable(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisable(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

export default AppPicker;
