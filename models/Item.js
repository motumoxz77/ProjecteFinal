const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Estructura del model de dades d'un Usuari
//Esquema d'un usuari
const ItemSchema = new Schema({
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

module.exports = Item = mongoose.model('item', ItemSchema);
