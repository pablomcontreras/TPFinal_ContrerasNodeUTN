module.exports = router;

var express = require("express");
var router = express.Router();
const categoriasController = require("../Controller/categoriasController");

//Toda operacion sobre las categorías requieren que el usuario este logueado

//Obtener Todas las Categorias
router.get(
  "/",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  categoriasController.getAll
);
//Obtener la categoria de un ID
router.get(
  "/:id",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  categoriasController.getById
);
//Crear una categoria
router.post(
  "/",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  categoriasController.create
);
//Modificar una categoria
router.put(
  "/:id",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  categoriasController.modify
);
//Eliminar una categoria
router.delete(
  "/:id",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  categoriasController.delete
);


module.exports = router;
