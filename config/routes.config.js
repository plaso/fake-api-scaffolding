const express = require('express');
const mainController = require("../controllers/main.controller")

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get("/cities", mainController.list)

router.post("/cities/:id/delete", mainController.doDelete)

router.get("/cities/create", mainController.create)
router.post("/cities/create", mainController.doCreate)

router.get("/cities/:id/edit", mainController.edit)
router.post("/cities/:id/edit", mainController.doEdit)

module.exports = router;