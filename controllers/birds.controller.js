const birdsService = require("../services/birds.service");

module.exports.list = (req, res, next) => {
  birdsService
    .getBirds()
    .then((response) => {
      console.log(response);
      res.render("birds", { birds: response.data });
    })
    .catch((err) => next(err));
};

module.exports.get = (req, res, next) => {
  birdsService
    .getBird(req.params.id)
    .then((response) => {
      res.render("birdDetail", { bird: response.data });
    })
    .catch((err) => next(err));
};

module.exports.create = (req, res, next) => {
  res.render("newBird");
};

module.exports.doCreate = (req, res, next) => {
  birdsService
    .createBird(req.body)
    .then((response) => {
      res.redirect(`/birds/${response.data.id}`);
    })
    .catch((err) => next(err));
};
