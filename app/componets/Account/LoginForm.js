import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { isEmpty } from "lodash";
//import { useNavigation } from "@react-navigation/native";
export default function LoginForm(props) {
  const { toastRef } = props;
  const [showPasword, setShowPasword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [loading, setLoading] = useState(false);
  //const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };
  /**
   * If the email or password field is empty, then show an alert.
   */
  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      // toastRef.current.show("Todos los campos son obligatorios");
      alert("todos los putos campos son obligatorios");
    }
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.rightIcon}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPasword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPasword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.rightIcon}
            onPress={() => setShowPasword(!showPasword)}
          />
        }
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
      />
    </View>
  );
}
/**
 * It returns an object with two properties, email and password, both of which have an empty string as
 * their value.
 * @returns An object with two properties, email and password.
 */
function defaultFormValue() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#00a680",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
