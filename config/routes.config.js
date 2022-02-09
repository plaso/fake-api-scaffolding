const express = require('express');

const router = express.Router();

const pokemonsController = require('../controllers/pokemons.controller');

router.get('/', (req, res, next) => {
  res.render('index')
})

/* pokemons */
router.get('/pokemons', pokemonsController.list)
router.get('/pokemons/new', pokemonsController.create)
router.get('/pokemons/:id', pokemonsController.get)
router.post('/pokemons', pokemonsController.doCreate)
router.post('/pokemons/:id/delete', pokemonsController.delete)
router.delete('/pokemons/:id/delete', pokemonsController.deleteClient)
router.get('/pokemons/:id/edit', pokemonsController.edit )
router.post('/pokemons/:id', pokemonsController.editClient )


module.exports = router;