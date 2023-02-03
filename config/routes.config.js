const express = require("express");
const axios = require("axios");
const API_URL = "http://localhost:8000";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/cities", (req, res, next) => {
  axios
    .get(`${API_URL}/cities`)
    .then((cities) => {
      res.render("../views/routes/cities", { cities: cities.data });
    })
    .catch((err) => res.render("/"));
});

router.post("/cities/:id", (req, res, next) => {
  const id = req.params.id;
  axios
    .delete(`${API_URL}/cities/${id}`)
    .then((response) => {
      res.redirect("/cities");
    })
    .catch((err) => res.render("/"));
});

router.post("/cities", (req, res, next) => {
  const name = req.body.name;
  axios
    .post(`${API_URL}/cities`, { name })
    .then((response) => {
      res.redirect("/cities");
    })
    .catch((err) => res.render("/"));
});


module.exports = router;
