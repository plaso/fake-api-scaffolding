const { default: axios } = require('axios');
const { getCourses, getCourse } = require('../services/courses.service');

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

module.exports.edit = (req, res, next) => {
    const { id } = req.params;

    getCourse(id)
        .then((response) => {
            res.render('courses/updateForm', { course: response.data })
        })
        .catch((err) => {
            console.log(err)
        })
}