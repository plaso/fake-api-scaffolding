const httpClient = require("./base.service");

const getBirds = () => httpClient.get("/birds");

const getBird = (birdId) => httpClient.get(`/birds/${birdId}`);

const create = (data) => httpClient.post('/birds', data)

 module.exports = {
     getBirds,
     getBird,
     create
 }