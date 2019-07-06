//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import OverlayOnInput from "../../Elements/OverlayOnInput";

// create a component
const UpdateUserInfo = ({ userInfo, updateUserDisplayName }) => {
  const [visible, setvisible] = useState(true);

  const [overlayComponent, setoverlayComponent] = useState(null);
  const menuItems = [
    {
      title: "Cambiar Nombre y Apellido",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconnameRight: "chevron-right",
      iconColorRight: "#ccc",
      placeholder: "Nombres y Apellidos",
      onPress: () => openOverlay("Nombres y Apellidos", userInfo.displayName)
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconnameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => console.log("click cambiarr nombre")
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconnameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => console.log("click Contraseña")
    }
  ];

  const openOverlay = (placeholder, inputValue) => {
    setoverlayComponent(
      <OverlayOnInput
        isVisibleOverlay={visible}
        placeholder={placeholder}
        updateFunction={updateUserDisplayName}
        inputValue={inputValue}
      />
    );
  };

  const hanlePress = idx => {
    setoverlayComponent(menuItems[idx])
  }


  return (
    <View>
      {menuItems.map((item, idx) => (
        <ListItem
          key={idx}
          title={item.title}
          leftIcon={{
            type: item.iconType,
            name: item.iconNameLeft,
            color: item.iconColorLeft
          }}
          rightIcon={{
            type: item.iconType,
            name: item.iconnameRight,
            color: item.iconColorRight
          }}
          onPress={item.onPress}
          containerStyle={styles.container}
        />
      ))}
      {overlayComponent}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3"
  }
});

export default UpdateUserInfo;
