const httpClient = require('./base.service');

const getPokemons = () => httpClient.get('/pokemons');

const getPokemon = (pokemonId) => httpClient.get(`/pokemons/${pokemonId}`);

const createPokemon = (data) => httpClient.post('/pokemons', data)

const deletePokemon = (pokemonId) => httpClient.delete(`/pokemons/${pokemonId}`)

const editPokemon = (id, pokemon) => httpClient.patch(`/pokemons/${id}`, pokemon)

module.exports = {
  getPokemons,
  getPokemon,
  createPokemon,
  deletePokemon,
  editPokemon
}