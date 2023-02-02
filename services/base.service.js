const axios = require('axios');

const http = axios.create({
    baseURL: 'http://localhost:8000'
});

module.exports = http