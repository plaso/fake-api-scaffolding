const http = require ("./base.service");

const getCourses = () => http.get("/courses");
const createCourse = (data) => http.post("/courses", data);
const getCourse = (id) => http.get(`/courses/${id}`);
const deleteCourse = (id) => http.delete(`/courses/${id}`);
const updateCourse = (id, data) => http.patch(`/courses/${id}`, data)

module.exports = {
    getCourses,
    createCourse,
    getCourse,
    deleteCourse,
    updateCourse
}