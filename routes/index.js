var express = require('express');
const productosController = require('../Controller/productosController');
var router = express.Router();

// Get Featured
router.get("/", productosController.getFeatured);

module.exports = router;


