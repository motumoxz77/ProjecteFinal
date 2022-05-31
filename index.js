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

const Item = require('./models/Item');

app.get('/', (req, res) => {
  Item.find()
    .then(items => res.render('index', { items }))
    .catch(err => res.status(404).json({ msg: 'No items found' }));
});

app.post('/item/add', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.redirect('/'));
});

const port = 3000;  

app.listen(port, () => console.log('Server running...'));
