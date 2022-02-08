const axios = require('axios');

const httpClient = axios.create({
     baseURL: 'http://localhost:3000'
});

module.exports = httpClient