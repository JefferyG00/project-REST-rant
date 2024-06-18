// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.set('views',__dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('*', (req, res) => {
  res.render('error404');
});

app.get('/', (req, res) => {
    res.render('places/index')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});