import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";

//screens
import Home from "../screens/Home";
import MyAccount from "../screens/MyAccount/MyAccount";
import Search from "../screens/Search";
import TopFive from "../screens/TopFive";
import { createNativeWrapper } from "react-native-gesture-handler";
import RegisterScreen from "../screens/MyAccount/Register"

const homeScreenStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Inicio"
    })
  }
});

const topFiveScreen = createStackNavigator({
  TopFive: {
    screen: TopFive,
    navigationOptions: ({ navigation }) => ({
      title: "Top 5 Restaturantes"
    })
  }
});

const searchScreen = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: "Buscar"
    })
  }
});

const myAccounthScreen = createStackNavigator({
  MyAccount: {
    screen: MyAccount,
    navigationOptions: ({ navigation }) => ({
      title: "Mi cuenta"
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Registro"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: homeScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="compass-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    TopFive: {
      screen: topFiveScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Top 5",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="star-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: searchScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="magnify"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    MyAccount: {
      screen: myAccounthScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    },
    order: ['Home', 'TopFive', 'Search', 'MyAccount',],
    initialRouteName: 'MyAccount'
  }
);

export default createAppContainer(RootStack);
