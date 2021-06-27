import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function Button(props) {
  return (
      <TouchableOpacity style={styles["button"]} onPress={props.onPress}>
        <Icon name="plus" size={50} color="#fff" />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    backgroundColor: "#5d5d5d",
    borderRadius: 100,
    position: "absolute",
    right: 20,
    bottom: 30,
  },
});
