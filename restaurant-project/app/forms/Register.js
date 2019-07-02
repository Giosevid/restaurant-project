import React from 'react';

import t from 'tcomb-form-native';
import formValidation from '../utils/Validations';

export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirmation: formValidation.password,
})

export const RegisterOptions = {
    fields: {
        name: {
            label: "Nombre (*)",
            placeholder: "Escribe tu nombre",
            error: "Nombre invalido",
        },
        email: {
            label: "Email (*)",
            placeholder: "Escribe tu email",
            error: "Email inválido",
        },
        password: {
            label: "Contraseña (*)",
            placeholder: "Escribe tu contraseña",
            error: "Contraseña inválida",
            password: true,
            secureTextEntry: true,
        },
        passwordConfirmation: {
            label: "Repetir Contraseña (*)",
            placeholder: "Escribe tu contraseña nuevamente",
            error: "Contraseña inválida",
            password: true,
            secureTextEntry: true,
            name: "passwordConfirm"
        }
    }
}