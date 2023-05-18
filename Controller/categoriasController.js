const categoriasModel = require("../Models/categoriasModel.js");

module.exports = {
  //Traer todos
  getAll: async function (req, res, next) {
    try {
      const documents = await categoriasModel.find();
      res.status(200).json(documents);
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
  //Traer por ID
  getById: async function (req, res, next) {
    try {
      const categoria = await categoriasModel.findById(req.params.id);
      res.status(200).json(categoria);
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
  //esta funcion tiene implementado la posibilidad de agregar multiples registros en un mismo request
  create: async function (req, res, next) {
    try {
      console.log(req.body);
      //si es un array avanza con el MAP, sino lo modifica para que sea un array de un solo elemento, para que funcione map
      const elementos = Array.isArray(req.body) ? req.body : [req.body];
      const registrosCreados = await Promise.all(
        elementos.map(async (elemento) => {
          const document = new categoriasModel({
            nombre: elemento.nombre,
            descripcion: elemento.descripcion,
          });
          await document.save();
        })
      );
      res.status(200).send("Categorías creadas con exito");
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
  //Modificar cateogrias
  modify: async function (req, res, next) {
    try {
      await categoriasModel.updateOne({ _id: req.params.id }, req.body);
      res.status(201).send("Categoría Actualizado con éxito!");
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
  //Eliminar Categorias
  delete: async function (req, res, next) {
    try {
      await productoModel.deleteOne({ _id: req.params.id });
      res.status(200).send("Categoría eliminada con éxito!");
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
};
