import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

export default function InfoUser() {
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        containerStyle={styles.userInfoAvatar}
        source={require("../../../assets/avatar-default.jpg")}
      />
      <View>
        <Text style={styles.displayName}>bienvenido: José Luis</Text>
        <Text>Correo: admin@admin.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
