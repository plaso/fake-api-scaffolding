const coursesService = require('../services/courses.service');

module.exports.list = (req, res, next) => {
  coursesService.getCourses()
    .then(response => {
      console.log(response)
      res.render('courses', { courses: response.data })
    })
    .catch(err => next(err))
}

module.exports.get = (req, res, next) => {
  coursesService.getCourse(req.params.id)
    .then(response => {
      res.render('courseDetail', { course: response.data })
    })
    .catch(err => next(err))
}

module.exports.create = (req, res, next) => {
  res.render('newCourse')
}

module.exports.doCreate = (req, res, next) => {
  coursesService.createCourse(req.body)
    .then((response) => {
      res.redirect(`/courses/${response.data.id}`)
    })
    .catch(err => next(err))
}

module.exports.delete = (req, res, next) => {
  coursesService.deleteCourse(req.params.id)
  .then((response) => {
    res.redirect('/courses')
  })
  .catch(err => next(err))
}

module.exports.deleteClient = (req, res, next) => {
  coursesService.deleteCourse(req.params.id)
    .then((response) => {
      res.status(200).json({})
    })
    .catch(err => next(err))
}


 // edit
 module.exports.edit = (req, res, next) => {
  coursesService.getCourse(req.params.id)
    .then(response => {
      res.render('editCourse', { course: response.data })
    })
    .catch(err => next(err))
}

// edit post
module.exports.doEdit = (req, res, next) => {
  const id = req.params.id
  console.log("controller",id ,req.params)
  coursesService.editCourse(id, req.body)
    .then((response) => {
      console.log("ASDASDASDASDASDASDASD",response.data)
      res.redirect(`/courses/${response.data.id}`)
    })
    .catch(err => next(err))
}
