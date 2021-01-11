'use strict'

class StoreUser {
  get rules () {
    return {
      name:"required",
      email: 'required|email|unique:users',
      password: 'required|min:8|confirmed'
    }
  }

  get messages () {
    return {
      'email.required': 'Debes ingresar un correo',
      'email.email': 'Debes ingresar un email válido',
      'email.unique': 'Est email ya existe',
      'password.required': 'Debes ingresar una contraseña',
      'password.min': 'Contraseña debe tener al menos 8 caracteres',
      'name.required':"Debes ingresar un nombre",
      "password.confirmed": "Contraseñas no coinciden"
    }
  }

}

module.exports = StoreUser
