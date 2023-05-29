import React, { useState } from "react";
import { Switch, View } from "react-native";

function AppSwitch(props) {
  const [isNew, setIsNew] = useState(false);
  return (
    <View>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </View>
  );
}

export default AppSwitch;
