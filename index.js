const express = require('express');
const mongoose = require('mongoose');
//Inicialització de les variables corresponents per tal d'utilitzar aquest moduls.
const app = express(); 

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Connexió a la BDD de MongoDB
mongoose
  .connect(
    'mongodb+srv://prueba:55@cluster0.zit7ikz.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true } //Introduir la URL que proporciona MONGODB
  )
  .then(() => console.log('Connexió correcte a MongoDB'))
  .catch(err => console.log(err));

//Importarem el nostre model de dades indicant la ruta corresponent
const userSchema = require('./models/Item');
//ENDPOINT per crear un usuari;
app.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//ENDPOINT per obtenir tots elsusuaris
app.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//ENDPOINT per trobar usuari en concret
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//ENDPOINT per actualitzar un usuari en concret
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, username, password } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, username, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//ENDPOINT per eliminar usuari
// delete a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

const port = 3000;  

app.listen(port, () => console.log('Server listening on port',3000));
