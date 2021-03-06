var express = require('express');
var router = express.Router();
var db = require('/models');
// GET - return a page with favorited Pokemon
router.get('/', function(req, res) {
  db.pokemon.findAll({

  }).then(function(pokemon) {
    res.render('pokemon/index.ejs', { pokemon: pokemon });
  });


// POST - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // res.send(req.body.name);
  query = {
    name: req.body.name
  };
  db.pokemon.create(query).then(function(newPokemon) {
    res.redirect('/pokemon');
  });
});

module.exports = router;
