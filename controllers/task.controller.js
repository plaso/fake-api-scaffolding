const Task = require("../models/task.model");

module.exports.list = (req, res, next) => {
  Task.find()
    .then((tasks) => res.render("task/list", { tasks }))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  res.render("task/form");
};

module.exports.doCreate = (req, res, next) => {
  Task.create(req.body)
    .then((newTask) => {
      res.redirect("/task");
      console.info(`${newTask.title} has been created`);
    })
    .catch(next);
};

module.exports.doDelete = (req, res, next) => {
  Task.findByIdAndDelete()
  .then(task => {
    res.send('Task deleted')
  })
  .catch(next);
};
