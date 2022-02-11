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
  res.render('newBird');
};
  
module.exports.doCreate = (req, res, next) => {
  birdsService
    .createBird(req.body)
    .then((response) => {
      res.redirect(`/birdDetail/${response.data.id}`);
    })
    .catch((err) => next(err));
};

module.exports.delete = (req, res, next) => {
  birdsService.deleteBird(req.params.id)
  .then((response) => {
    res.redirect('/birds')
    console.log('Successfully delete')
  })
  .catch(err => next(err));
};

module.exports.edit = (req, res, next) => {
  res.render('editBird')
};

module.exports.doEdit = (req, res, next) => {
  birdsService
  .editBird(req.params.id)
  .then((response) => {
    res.redirect(`/birdDetail/${response.data.id}`)
  })`
  .catch((err) => next(err));`
}