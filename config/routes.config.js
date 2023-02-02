const express = require('express');
const router = express.Router();
const miscController = require('../controllers/misc.controller');
const coursesController = require('../controllers/courses.controller');

router.get('/', miscController.index);

router.get('/courses', coursesController.list);
router.get('/courses/create', coursesController.create);
router.post('/courses', coursesController.doCreate);
router.delete('/courses/:id', coursesController.doDelete);
router.get('/courses/:id/edit', coursesController.edit);
router.post('/courses/:id', coursesController.doEdit)

module.exports = router;