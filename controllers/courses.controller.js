const { default: axios } = require('axios');
const { getCourses, deleteCourse, createCourse } = require('../services/courses.service');

module.exports.list = (req, res, next) => {
    console.log('entro')

    getCourses()
        .then(response => {
            res.render('courses/list', { courses: response.data })
        })
        .catch((err) => {
            console.log(err)
        })
};

module.exports.delete = (req, res, next) => {
    deleteCourse(req.params.id)
    .then((response) => {
      res.redirect('/courses')
    })
    .catch(err => next(err))
  };

  module.exports.create = (req, res, next) => {
    res.render('courses/createCourse')
  };

  module.exports.doCreate = (req, res, next) => {
    createCourse(req.body)
    .then((response) => {
        res.redirect('/courses')
    })
    .catch(err => next(err))
};