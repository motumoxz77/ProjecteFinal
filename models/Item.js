const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Estructura del model de dades d'un Usuari
//Esquema d'un usuari
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});
//Exportem el model de dades
module.exports = Item = mongoose.model('Usuari', userSchema);
