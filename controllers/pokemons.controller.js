const pokemonsService = require('../services/pokemons.service');

module.exports.list = (req, res, next) => {
  pokemonsService.getPokemons()
    .then(response => {
      console.log(response)
      res.render('pokemons', { pokemons: response.data })
    })
    .catch(err => next(err))
}

module.exports.get = (req, res, next) => {
  pokemonsService.getPokemon(req.params.id)
    .then(response => {
      res.render('pokemonDetail', { pokemon: response.data })
    })
    .catch(err => next(err))
}

module.exports.create = (req, res, next) => {
  res.render('newPokemon')
}

module.exports.doCreate = (req, res, next) => {
  pokemonsService.createPokemon(req.body)
    .then((response) => {
      res.redirect(`/pokemons/${response.data.id}`)
    })
    .catch(err => next(err))
}

module.exports.delete = (req, res, next) => {
  pokemonsService.deletePokemon(req.params.id)
  .then((response) => {
    res.redirect('/pokemons')
  })
  .catch(err => next(err))
}

module.exports.deleteClient = (req, res, next) => {
  pokemonsService.deletePokemon(req.params.id)
    .then((response) => {
      res.status(200).json({})
    })
    .catch(err => next(err))
}


module.exports.edit = (req, res, next) => {
  pokemonsService.editPokemon(req.params.id)
  .then((response) => {
    res.redirect('pokemons/edit-pokemon')
  })
  .catch(err => next(err))


}

module.exports.editClient = (req, res, next) => {
  pokemonsService.editPokemon(req.params.id)
  .then((response) => {
    res.status(200).json({})
  })
  .catch(err => next(err))


}