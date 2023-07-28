const express = require('express');
const coursesController = require('../controllers/courses.controller');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index')
})

// Mostrar los cursos
router.get('/courses', coursesController.list)
router.get('/courses/create', coursesController.create)
router.post('/courses/create', coursesController.doCreate)
router.post('/courses/:id/delete', coursesController.delete)
router.get('/courses/:id/detail', coursesController.detail)

module.exports = router;