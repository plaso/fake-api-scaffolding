const http = require('./base.service');

const getCourses = () => http.get('/courses');

const getCourse  = (id) => http.get(`/courses/${id}`);

const updateCoruse  = (id, body) => http.get(`/courses/${id}`, body);

module.exports = {
    getCourses,
    getCourse,
}