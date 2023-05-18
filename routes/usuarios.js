module.exports = router;

var express = require("express");
var router = express.Router();
const usuariosController = require("../Controller/usuariosController");

//Obtener Listado de Usuarios (si hay logueado)
router.get(
  "/",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  usuariosController.getAll
);
//Crear Usuario
router.post("/", usuariosController.create);
//Ingresar
router.post("/login", usuariosController.login);
//Modificar Usuario (solo si esta logueado)
router.put(
  "/:id",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  usuariosController.modify
);
//Eliminar Usuario (solo si esta logueado)
router.delete(
  "/:id",
  (req, res, next) => {
    req.app.verificarToken(req, res, next);
  },
  usuariosController.delete
);

module.exports = router;
