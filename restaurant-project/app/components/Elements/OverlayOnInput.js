import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Overlay, Input, Button } from "react-native-elements";

// create a component
const OverlayOnInput = ({
  isVisibleOverlay,
  placeholder,
  updateFunction
}) => {
  const [valueInput, setvalueInput] = useState("");
  const [visible, setVisible] = useState(isVisibleOverlay);
  const update = () => {
    updateFunction(valueInput);
    setVisible(false)
  };

  const onChangeInput = inputData => {
    setvalueInput(inputData)
  };

  return (
    <Overlay
      isVisible={visible}
      windowBackgroundColor="transparent"
      overlayStyle={styles.OverlayOnInput}
    >
      <View style={styles.container}>
        <Input
          placeholder={placeholder}
          containerStyle={styles.inputContainer}
          onChangeText={value => onChangeInput(value)}
          value={valueInput}
        />
        <Button
          title="actualizar"
          buttonStyle={styles.buttonUpdate}
          onPress={update}
        />
      </View>
    </Overlay>
  );
};

// define your styles
const styles = StyleSheet.create({
  OverlayOnInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%"
  },
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderColor: "#00a680",
    borderWidth: 2
  },
  inputContainer: {
    marginBottom: 15
  },
  buttonUpdate: {
    backgroundColor: "#00a680"
  }
});

//make this component available to the app
export default OverlayOnInput;
