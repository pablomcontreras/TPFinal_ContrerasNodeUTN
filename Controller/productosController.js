const productosModel = require("../Models/productosModel");

module.exports = {
  //Traer todos
  getAll: async function (req, res, next) {
    try {
      const documents = await productosModel.find();
      res.status(200).json(documents);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },
  //Traer por ID
  getById: async function (req, res, next) {
    try {
      const product = await productosModel.findById(req.params.id);
      res.status(200).json(product);
    } catch (e) {
      console.log(e);
    }
  },
  //Traer los destacados
  getFeatured: async function (req, res, next) {
    try {
      const featured = await productosModel.find({ featured: true });
      res.status(200).json(featured);
    } catch (e) {
      console.log(e);
      res.send(e).json();
    }
  },

  create: async function (req, res, next) {
    try {
      console.log(req.body);
      const document = new productosModel({
        nombre: req.body.nombre,
        precio: req.body.precio,
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        featured: req.body.featured,
      });
      const product = await document.save();
      res.json(product);
    } catch (e) {
      console.log(e);
    }
  },

  //TENTATIVA DE MODIFICAR educacions

  modify: async function (req, res, next) {
    try {
      await productosModel.updateOne({ _id: req.params.id }, req.body);
      res.status(201).send("Producto Actualizado con éxito!");
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  delete: async function (req, res, next) {
    try {
      await productoModel.deleteOne({ _id: req.params.id });
      res.status(200).send("Producto Eliminado con éxito!");
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },
};
