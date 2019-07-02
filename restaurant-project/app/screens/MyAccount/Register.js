import React, { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RegisterOptions, RegisterStruct } from "../../forms/Register";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;

const Register = () => {
  const register = () => {
    console.log(form.getValue());
  };
  const [formData, setformData] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirmation: ""
  });

  return (
    <View style={styles.container}>
      <Form
        ref={form => (this.form = form)}
        type={RegisterStruct}
        options={RegisterOptions}
        value={formData}
      />
      <Button title="Unirse" onPress={register} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    justifyContent: "center"
  }
});

export default Register;
