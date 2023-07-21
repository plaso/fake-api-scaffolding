const { default: axios } = require('axios');
const { getCities, deleteCity, createCity } = require('../services/cities.service');

module.exports.list = (req, res, next) => {

    getCities()
        .then(response => {
            res.render('cities/citiesList', { cities: response.data })
        })
        .catch((err) => {
            console.log(err)
        })
};

module.exports.delete = (req, res, next) => {
    deleteCity(req.params.id)
    .then((response) => {
      res.redirect('/cities')
    })
    .catch(err => next(err))
  };

  module.exports.create = (req, res, next) => {
    res.render('cities/createCity')
  };

  module.exports.doCreate = (req, res, next) => {
    createCity(req.body)
    .then((response) => {
        res.redirect('/cities')
    })
    .catch(err => next(err))
};