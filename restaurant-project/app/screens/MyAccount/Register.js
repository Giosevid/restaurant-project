import React, { useRef, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { RegisterOptions, RegisterStruct } from "../../forms/Register";
import { Button, Text, Image } from "react-native-elements";
import * as firebase from "firebase";
import Toast, { DURATION } from "react-native-easy-toast";

import t from "tcomb-form-native";
const Form = t.form.Form;

const Register = ({ navigation }) => {
  const register = () => {
    const { password, passwordConfirmation } = formData;
    if (password === passwordConfirmation) {
      const validate = form.getValue();
      if (validate) {
        setformErrorMessage("");
        firebase
          .auth()
          .createUserWithEmailAndPassword(validate.email, validate.password)
          .then(resolved => {
            toast.show("Registro correcto", 150, () => {
              navigation.goBack();
            });
          })
          .catch(err => {
            toast.show("El email ya esta en uso", 2500);
          });
      } else {
        setformErrorMessage("Formulario inválido");
      }
    } else {
      setformErrorMessage("Las contraseñas no son iguales");
    }
  };

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const [formErrorMessage, setformErrorMessage] = useState("");

  const onChangeFormRegister = formValue => {
    setformData(formValue);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/Restaurant-Logos.png")}
        style={styles.logo}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
        containerStyle={styles.containerLogo}
      />
      <Form
        ref={form => (this.form = form)}
        type={RegisterStruct}
        options={RegisterOptions}
        value={formData}
        onChange={formValue => onChangeFormRegister(formValue)}
      />
      <Button
        buttonStyle={styles.ButtonRegisterContainer}
        title="Unirse"
        onPress={register}
      />
      <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>
      <Toast
        ref={toast => (this.toast = toast)}
        position="bottom"
        positionValue={250}
        fadeInDuration={1000}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: "#fff" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "center"
  },
  ButtonRegisterContainer: {
    backgroundColor: "#00a680",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  formErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 30,
  },
});

export default Register;
