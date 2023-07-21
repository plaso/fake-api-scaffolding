const http = require('./base.service');

const getCourses = () => http.get('/courses');

const deleteCourse  = (id) => http.delete(`/courses/${id}`);

const createCourse = (data) => http.post(`/courses`, data);

module.exports = {
    getCourses,
    deleteCourse,
    createCourse
}