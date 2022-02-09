const cakesService = require("../services/cakes.service");

module.exports.list = (req, res, next) => {
  cakesService
    .getCakes()
    .then((response) => {
      console.log(response);
      res.render("cakes", { cakes: response.data });
    })
    .catch((err) => next(err));
};

module.exports.get = (req, res, next) => {
  cakesService
    .getCake(req.params.id)
    .then((response) => {
      res.render("cakeDetail", { cake: response.data });
    })
    .catch((err) => next(err));
};

module.exports.create = (req, res, next) => {
  res.render("newCake");
};

module.exports.doCreate = (req, res, next) => {
  cakesService
    .createCake(req.body)
    .then((response) => {
      res.redirect(`/cakes/${response.data.id}`);
    })
    .catch((err) => next(err));
};

module.exports.delete = (req, res, next) => {
  cakesService
    .deleteCake(req.params.id)
    .then((response) => {
      res.redirect("/cakes");
    })
    .catch((err) => next(err));
};

module.exports.deleteClient = (req, res, next) => {
  cakesService
    .deleteCourse(req.params.id)
    .then((response) => {
      res.status(200).json({});
    })
    .catch((err) => next(err));
};
