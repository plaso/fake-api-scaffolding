const express = require('express');

const router = express.Router();

const coursesController = require('../controllers/courses.controller');
const citiesController = require('../controllers/cities.controller')

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/courses', coursesController.list);
router.get('/courses/createCourse', coursesController.create);
router.post('/courses', coursesController.doCreate);
router.post('/courses/:id/delete', coursesController.delete);

router.get('/cities', citiesController.list);
router.get('/cities/createCity', citiesController.create);
router.post('/cities', citiesController.doCreate);
router.post('/cities/:id/delete', citiesController.delete);

module.exports = router;