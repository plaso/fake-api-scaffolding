const express = require('express');
const router = express.Router();
const miscController = require('../controllers/misc.controller');
const taskController = require('../controllers/task.controller');

router.get('/', miscController.index);

router.get('/task', taskController.list);
router.get('/task/create', taskController.create);
router.post('/task/create', taskController.doCreate);
router.delete('/task/:id', taskController.doDelete);

module.exports = router;