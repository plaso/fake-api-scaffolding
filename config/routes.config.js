const express = require('express');

const router = express.Router();

const birdsController = require("../controllers/birds.controller");


router.get('/', (req, res, next) => {
  res.render('index')
})

/* BIRDS */

router.get('/birds', birdsController.list);
router.get('/birds/newBird', birdsController.create);
router.get('/birds/editBird', birdsController.edit)
router.get('/birds/:id', birdsController.get); /* REMEMBER: ruta parametizable al final */
router.post('/birds', birdsController.doCreate);
router.post('/birds/:id/delete', birdsController.delete);
router.post('/birds/:id/edit', birdsController.doEdit);


module.exports = router;