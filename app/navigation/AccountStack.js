import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Account/Login";
const Stack = createStackNavigator();
export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar Sesíon" }}
      />
    </Stack.Navigator>
  );
}
