const http = require('./base.service');

const getCities = () => http.get('/cities');

const deleteCity  = (id) => http.delete(`/cities/${id}`);

const createCity = (data) => http.post('/cities', data);

module.exports = {
    getCities,
    deleteCity,
    createCity
}