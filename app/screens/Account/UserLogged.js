import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import Loading from "../../componets/Loading";
import InfoUser from "../../componets/Account/InfoUser";
import AccountOptions from "../../componets/Account/AccountOptions";
export default function UserLogged() {
  return (
    <View style={styles.viewUserInfo}>
      <InfoUser />
      <AccountOptions />
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnCloseSessionText: {
    color: "#00a680",
  },
});
