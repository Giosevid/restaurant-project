import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button, Image } from "react-native-elements";

const MyAccountGuest = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/image-my-account-guest-01.jpg")}
        PlaceholderContent={<ActivityIndicator />}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta tu perfil</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma senculla, vota cual te ha gustado más y
        comenta cómo ha sido tu experiencia
      </Text>
      <Button title="Ver tu perfil" buttonStyle={styles.btnViwProfileView} onPress={()=>goToScreen("Login")} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30
  },
  image: {
    height: 300,
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  btnViwProfileView: {
    width: "100%",
    backgroundColor: "#00a680"
  }
});

//make this component available to the app
export default MyAccountGuest;
