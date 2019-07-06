//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserInfo from "./UserInfo"

// create a component
const MyAccountUser = () => {
    return (
        <View>
            <UserInfo/>
        </View>
    );
};

//make this component available to the app
export default MyAccountUser;
