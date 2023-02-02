const { getCourses, createCourse, getCourse, deleteCourse, updateCourse } = require('../services/courses.service')

module.exports.list = (req, res, next) => {
  getCourses()
  .then(response => {
    res.render("courses/list", { courses: response.data } );
  })
  .catch(next)
};

module.exports.create = (req, res, next) => {
  res.render('courses/create')
};

module.exports.doCreate = (req, res, next) => {
  createCourse(req.body)
  .then(response => res.redirect('/courses'))
  .catch(next)
};

module.exports.doDelete = (req, res, next) => {
  deleteCourse(req.params.id)
  .then(response => res.send('course deleted'))
  .catch(next)
};

module.exports.edit = (req, res, next) => {
  getCourse(req.params.id)
  .then(response => {
    res.render('courses/update', { course: response.data})
  })
  .catch(next)
};

module.exports.doEdit = (req, res, next) => {
  updateCourse(req.params.id, req.body)
  .then(response => res.redirect('/courses'))
  .catch(next)
}