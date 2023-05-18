var express = require("express");
var router = express.Router();
const producto = require('../Controller/productosController');

router.get("/", function (req, res, next) {
producto.getAll(req, res, next)});


router.post("/", function (req, res, next) {
  producto.create(req,res,next);
});


module.exports = router;
