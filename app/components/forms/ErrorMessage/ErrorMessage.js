import React from "react";
import styles from "./style";
import AppText from "../../AppText";

function ErrorMessage({ error, visible }) {
  console.log(error, visible);
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

export default ErrorMessage;
