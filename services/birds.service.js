const httpClient = require("./base.service");

const getBirds = () => httpClient.get("/birds");

const getBird = (id) => httpClient.get(`/birds/${id}`);

const createBird = (data) => httpClient.post('/birds', data);

const deleteBird = (id) => httpClient.delete(`/birds/${id}`)

const editBird = (data) => httpClient.edit('/birds', data)

 module.exports = {
     getBirds,
     getBird,
     createBird,
     deleteBird,
     editBird
 }