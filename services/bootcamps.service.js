const httpClient = require('./base.service');

const getBootcamps = () => httpClient.get('/bootcamps')

module.exports = {
  getBootcamps
}