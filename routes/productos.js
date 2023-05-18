module.exports = router;

var express = require("express");
var router = express.Router();
const productosController = require("../Controller/productosController");


// Obtener los Featured
router.get("/", productosController.getFeatured);
//Obtener todos (solo usuarios Logueados)
router.get("/todos",  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  }, productosController.getAll);
//Obtener por id
router.get("/:id", productosController.getById);
//Crear (solo autorizado para logueados)
router.post(
  "/",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  productosController.create
);
//Modificar (solo autorizado para logueados)
router.put(
  "/:id",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  productosController.modify
);
//Eliminar (solo autorizado para logueados)
router.delete(
  "/:id",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  productosController.delete
);

module.exports = router;
