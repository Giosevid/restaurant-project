import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";
import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser/MyAccountUser";

const MyAccount = ({ navigation }) => {
  const [login, setLogin] = useState(false);

  logout = () =>{
    firebase.auth().signOut();
  }

  goToScreen = (screen) => {
    navigation.navigate(screen)
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLogin(true);
      }else{
        setLogin(false);
      }
    });
  }, []);

  if (login) {
    return (
      <View style={styles.container}>
        <MyAccountUser/>
      </View>
    );
  } else {
    return (
      <MyAccountGuest goToScreen={goToScreen}/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default MyAccount;
