var express = require("express");
var router = express.Router();
const producto = require('../Controller/productosController');

/* GET users listing. */
router.get("/detalle/:id", function (req, res, next) {
    producto.getById(req.params.id);
  res.send("respond with a resource");
});

module.exports = router;
