const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Estructura del model de dades d'un Usuari
//Esquema d'un usuari
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
//Exportem el model de dades
module.exports = Item = mongoose.model('Usuari', userSchema);
