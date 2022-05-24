import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeStack from "./HomeStack";
import AccountStack from "./AccountStack";
import UserLogged from "../screens/Account/UserLogged";
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cuenta"
          component={AccountStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Opciones"
          component={UserLogged}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "Inicio":
      iconName = "home-outline";
      break;
    case "Cuenta":
      iconName = "account-circle-outline";
      break;
    case "Opciones":
      iconName = "star-outline";
      break;
    //   case "search":
    //     iconName = "magnify";
    //     break;
    //   case "account":
    // iconName = "home-outline";
    // break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
