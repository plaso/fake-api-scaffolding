const express = require('express');

const router = express.Router();

const birdsController = require("../controllers/birds.controller");


router.get('/', (req, res, next) => {
  res.render('index')
})

/* BIRDS */

router.get("/birds", birdsController.list);

module.exports = router;