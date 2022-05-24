import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../screens/Inicio";
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="inicio"
        component={Inicio}
        options={{ title: "inicio" }}
      />
      <Stack.Screen
        name="Opciones"
        component={Inicio}
        options={{ title: "Opciones" }}
      />
    </Stack.Navigator>
  );
}
