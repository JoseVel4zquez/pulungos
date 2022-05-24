import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { color } from "react-native-elements/dist/helpers";

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido de nuevo</Text>
      <Text style={styles.texto}>Jose Luis</Text>
      <Text style={styles.texto}>Inicio sesion como: Admin</Text>
      <Image source={require("../../assets/qrcode.png")} resizeMode="contain" />
      <Text style={styles.parrafo}>
        Escanee este codigo Qr en la terminal para acceder a las instalaciones
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titulo: {
    fontSize: 35,
    padding: 10,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 10,
  },
  texto: {
    fontSize: 25,
    marginTop: 20,
    padding: 15,
    alignSelf: "center",
  },
  parrafo: {
    fontSize: 15,
    fontStyle: "italic",
  },
});
