const http = require('./base.service');

const getCourses = () => http.get('/courses');
const createCourse = (data) => http.post('/courses', data);
const getCourse = (id) => http.get(`/courses/${id}`);
const deleteCourse = (id) => http.delete(`/courses/${id}`)


module.exports = {
    getCourses,
    createCourse,
    getCourse,
    deleteCourse
}