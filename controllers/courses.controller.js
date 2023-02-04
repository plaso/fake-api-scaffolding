const {getCourses, createCourse, getCourse, deleteCourse, updateCourse } = require('../services/courses.service')

module.exports.list = (req, res, next) => {
getCourses()
.then (response => {
    res.render("courses/list", {courses : response.data});
})
.catch(next)
};

module.exports.create = (req,res,next) =>{
    res.render("courses/create")
};

module.exports.doCreate = (req, res, next) =>{
    createCourse(req.body)
    .then(response => res.redirect("/courses"))
    .catch(next)
};
module.exports.doDelete =(req, res, next) => {
    getCourse(req.param.id)
    .then(response =>{
        res.render ("courses/update" , {course :response.delete})
    })
    .catch(next)
};

module.exports.doEdit = (req, res, next) =>{
    updateCourse(req.params.id)
    .then(response => res.redirect("/courses"))
    .catch(next)
}
