module.exports = router;

var express = require("express");
var router = express.Router();
const productosController = require("../Controller/productosController");

router.get("/", productosController.getAll);

router.get("/:id", productosController.getById);

router.post("/", productosController.create);
router.put("/:id", productosController.modify);
router.delete("/:id", productosController.delete);

module.exports = router;
