import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import Swipeable from "react-native-swipeable-row";
import Icon from "react-native-vector-icons/FontAwesome";

export default function swipeable(props) {
  return (
    <Swipeable
      key={props.key}
      bounceOnMount={true}
      leftButtons={[
        <TouchableOpacity
          style={styles["leftButton"]}
          onPress={props.onLeftActionComplete}
        >
          <Icon name={props.icon} size={30} color="#fff" />
        </TouchableOpacity>,
      ]}
      rightButtons={[
        <TouchableOpacity
          style={styles["rightButton"]}
          onPress={props.onRightActionComplete}
        >
          <Icon name="trash" size={30} color="#fff" />
        </TouchableOpacity>,
      ]}
    >
      <View style={styles["row"]}>
        <Text style={styles["title"]}>{props.text}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  leftButton: {
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#006700",
    paddingRight: 20,
    alignItems: "flex-end",
    borderRadius: 10,
  },
  rightButton: {
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#b30000",
    paddingLeft: 20,
    borderRadius: 10,
  },
  row: {
    borderWidth: 1,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    marginVertical: 2,
  },
  title: {
    fontStyle: "italic",
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});
