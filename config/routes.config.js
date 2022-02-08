const express = require('express');

const router = express.Router();

const cakesController = require("../controllers/cakes.controller");

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get("/cakes", cakesController.list);
router.get("/cakes/new", cakesController.create);
router.get("/cakes/:id", cakesController.get);
router.post("/cakes", cakesController.doCreate);
router.post("/cakes/:id/delete", cakesController.delete);
router.delete("/cakes/:id/delete", cakesController.deleteClient);


module.exports = router;