import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";
import IconPaper from "react-native-vector-icons/Octicons";

import { TaskScreen, FinishedTaskScreen } from "./index.js";

const Tab = createMaterialBottomTabNavigator();

export default function home() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#5d5d5d" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          return route.name === "Tasks" ? (
            <Icon name={"tasks"} size={22} color={color} />
          ) : (
            <IconPaper name={"checklist"} size={22} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Tasks" component={TaskScreen} />
      <Tab.Screen name="Finished" component={FinishedTaskScreen} />
    </Tab.Navigator>
  );
}
