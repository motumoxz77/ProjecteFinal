const express = require('express');
const mongoose = require('mongoose');
//Inicialització de les variables corresponents per tal d'utilitzar aquest moduls.
const app = express(); 

app.set('view engine', 'ejs');

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

app.get('/', (req, res) => {
  userSchema.find()
    .then(items => res.render('index', { items }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});

//Crear usuari
app.post('/item/add', (req, res) => {
  const user = new Item({
    name: req.body.name
  });
  //Amb el save guardem l'usuari a la BDD de MongoDB
  user.save().then(item => res.redirect('/'));
});

const port = 3000;  

app.listen(port, () => console.log('Server listening on port',3000));
