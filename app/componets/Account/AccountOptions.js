import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
export default function AccountOptions() {
  const selectedComponent = (key) => {
    switch (key) {
      case "displayName":
        setShowModal(true);
        break;
      case "email":
        break;
      case "password":
        break;
      default:
        break;
    }
  };

  return (
    <View>
      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
}
const list = [
  {
    title: "Sensor de temperatura",
    icon: "av-timer",
  },
  {
    title: "Sensor de humedad",
    icon: "flight-takeoff",
  },
  {
    title: "Control de alumnos",
    icon: "flight-takeoff",
  },
  {
    title: "Control de maestros",
    icon: "flight-takeoff",
  },
];
const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
});
