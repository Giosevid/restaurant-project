import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import UpdateUserInfo from "./UpdateUserInfo";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    photoURL: ""
  });
  const user = firebase.auth().onAuthStateChanged(user => setUserInfo(user));
  const { displayName, email, photoURL } = userInfo;

  useEffect(() => {
    getUserInfo();
    //firebase.auth().onAuthStateChanged((algo) => console.log('testmgkh', algo ))
  }, [displayName]);

  const getUserInfo = async () => {
    //console.log("userooiuoiuoiu", userInfo.providerData);
    const res = userInfo.providerData;
    
   
      console.log('resultado', res)
    
    // res.forEach(userInfo => {
    //   setUserInfo(userInfo);
    // });
  };

  const checkUseAvatar = photoUrl => {
    return photoUrl
      ? photoUrl
      : "https://api.adorable.io/avatars/285/abott@adorable.png";
  };

  const updateUserDisplayName = newDisplayName => {
    console.log('actualoi', newDisplayName)
    const update = {
      displayName: newDisplayName
    };
    try {
      getUserInfo();
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Avatar
          rounded
          size="large"
          source={{
            uri: checkUseAvatar(photoURL)
          }}
          containerStyle={styles.userInfoAvatar}
        />
        <Text style={styles.displayName}>{displayName}</Text>
        <Text>{email}</Text>
      </View>
      <UpdateUserInfo
        userInfo={userInfo}
        updateUserDisplayName={updateUserDisplayName}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#f2f2f2"
  },
  userInfoAvatar: {
    marginRight: 20
  },
  displayName: {
    fontWeight: "bold"
  }
});

//make this component available to the app
export default UserInfo;
