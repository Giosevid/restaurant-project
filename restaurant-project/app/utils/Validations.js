import t from "tcomb-form-native";

const formValidation = {
  email: t.refinement(t.String, value => {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      value
    ); //Significa que debe tener @
  }),
  password: t.refinement(t.String, value => {
    return value.lenght >= 6; //Mas de 6 char
  })
};

export default formValidation;
