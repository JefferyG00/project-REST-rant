const router = require('express').Router();
const places = require('../models/places.js');
const methodOverride = require('method-override');

// Middleware for method override
router.use(methodOverride('_method'));


router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
      res.render('error404');
  } else if (!places[id]) {
      res.render('error404');
  } else {
      // Update the place with new data
      places[id] = req.body;
      res.redirect(`/places/${id}`); // Redirect to the updated place page
  }
});

// Other routes...
router.post('/', (req, res) => {
  
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect('/places');
});

router.get('/', (req, res) => {
  res.render('places/index', { places });
});

router.get('/new', (req, res) => {
  res.render('places/new');
});

router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  } else if (!places[id]) {
    res.render('error404');
  } else {
    res.render('places/show', { place: places[id], id });
  }
});


router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  } else if (!places[id]) {
    res.render('error404');
  } else {
    res.render('places/edit', { place: places[id], id }); // Include the id here
  }
});

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render('error404');
  } else if (!places[id]) {
    res.render('error404');
  } else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

module.exports = router;
