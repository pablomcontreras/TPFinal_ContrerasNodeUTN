var express = require('express');
const productosController = require('../Controller/productosController');
var router = express.Router();

// Get Featured
router.get("/", function (req, res, next) {
    productosController.getFeatured();
  res.send("respond with a resource");
});
module.exports = router;
