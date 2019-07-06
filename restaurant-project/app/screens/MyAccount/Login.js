import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Image, Button, SocialIcon, Divider } from "react-native-elements";
import * as firebase from "firebase";
import Toast, { DURATION } from "react-native-easy-toast";
import t from "tcomb-form-native";

const Form = t.form.Form;
import * as Facebook from "expo-facebook";

import { LoginterStruct, LoginOptions } from "../../forms/Login";

import { FacebookApi } from "../../utils/Social";

const Login = ({ navigation }) => {
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  });

  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  onChangeFormLogin = formValue => {
    setloginData(formValue);
  };

  login = () => {
    const validate = loginForm.getValue();
    if (!validate) {
      setLoginErrorMessage("Los datos el formulario son erroneos");
    } else {
      setLoginErrorMessage("");
      firebase
        .auth()
        .signInWithEmailAndPassword(validate.email, validate.password)
        .then(() => {
          toast.show("Login correcto", 150, () => {
            navigation.goBack();
          });
        })
        .catch(() => {
          toast.show("Login Incorrecto", 2500);
        });
    }
  };

  loginFacebook = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.aplication_id,
      { permissions: FacebookApi.permissions }
    );
    if (type === "success") {
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          toast.show("Login correcto", 100, () => {
            navigation.goBack();
          });
        })
        .catch(err => {
          toast.show("Error desconocido", 300);
        });
    } else if (type === "cancel") {
      toast.show("Inicio de sesión cancelado", 300);
    } else {
      toast.show("Error desconocido", 300);
    }
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
      <View style={styles.viewForm}>
        <Form
          ref={loginForm => (this.loginForm = loginForm)}
          type={LoginterStruct}
          options={LoginOptions}
          value={loginData}
          onChange={formValue => onChangeFormLogin(formValue)}
        />
        <Button
          title="Login"
          buttonStyle={styles.buttonLoginContainer}
          onPress={login}
        />
        <Text style={styles.textRegister}>
          ¿Aún no tienes una cuenta?
          <Text
            style={styles.btnRegister}
            onPress={() => navigation.navigate("Register")}
          >
            {" "}
            Registrate
          </Text>
        </Text>
        <Text style={styles.LoginErrorMessage}>{loginErrorMessage}</Text>
        <Divider style={styles.divider} />
        <SocialIcon
          title="Iniciar sesión con Facebook"
          button
          type="facebook"
          onPress={loginFacebook}
        />
      </View>
      <Toast
        ref={toast => (this.toast = toast)}
        position="bottom"
        positionValue={400}
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
    marginRight: 30,
    marginTop: 30
  },
  logo: {
    width: 300,
    height: 150
  },
  viewForm: {
    marginTop: 50
  },
  buttonLoginContainer: {
    backgroundColor: "#00a680",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  containerLogo: {
    alignItems: "center"
  },
  LoginErrorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  divider: {
    marginBottom: 20,
    backgroundColor: "#00a680"
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold"
  }
});

export default Login;
