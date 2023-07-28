const coursesService = require('../services/courses.service');

// Para mostrar todos los cursos
module.exports.list = (req, res, next) => {
    coursesService.getCourses()
    .then(response => {
        console.log(response)
        res.render('courses/courses', { courses: response.data });
    })
    .catch(err => next(err))
}

module.exports.detail = (req, res, next) => {
    coursesService.getCourse(req.params.id)
    .then(response => {
        console.log(response)
        res.render('courses/detail', { course: response.data } )
    })
    .catch(err => next(err))
}

module.exports.create = (req, res, next) => {
   res.render('courses/form')
}

module.exports.doCreate = (req, res, next) => {
    coursesService.createCourse(req.body)
    .then(response => {
        res.redirect(`/courses/${response.data.id}/detail`)
    })
    .catch(err => next(err));
}

module.exports.delete = (req, res, next) => {
    coursesService.deleteCourse(req.params.id)
    .then(response => {
        res.redirect('/courses')
    })
    .catch(err => next(err))
}
