const express = require('express');

const router = express.Router();

const axios = require('axios');

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/countries', (req, res) => {
  const apiUrl = 'https://restcountries.com/v3.1/all';
  axios.get(apiUrl)
    .then(response => {
      const countries = response.data;
      res.render('countries', { countries }); // Renderizar la vista 'countries.hbs' y pasar los datos como contexto
    })
    .catch(error => {
      console.error('Error al obtener los datos de la API de países:', error);
      res.status(500).send('Error al obtener los datos de la API de países');
    });
});


module.exports = router;