import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './src/screens'
import { reducers } from "./src/reducers/curd";

const Stack = createStackNavigator();

const store = createStore(reducers)

export default function MyTabs() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "My To-Do List",
              headerStyle: {
                backgroundColor: "#5d5d5d"
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
