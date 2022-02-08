const httpClient = require("./base.service");

const getCakes = () => httpClient.get("/cakes");

const getCake = (cakeId) => httpClient.get(`/cakes/${cakeId}`);

const createCake = (data) => httpClient.post("/cakes", data);

const deleteCake = (cakeId) => httpClient.delete(`/cakes/${cakeId}`);

module.exports = {
  getCakes,
  getCake,
  createCake,
  deleteCake,
};
