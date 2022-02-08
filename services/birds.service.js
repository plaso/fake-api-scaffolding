const httpClient = require("./base.service");

const getBirds = () => httpClient.get("/birds");

const getBird = (birdId) => httpClient.get(`/birds/${birdId}`);

 module.exports = {
     getBirds,
     getBird
 }