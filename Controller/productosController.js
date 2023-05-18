const productosModel = require("../Models/productosModel");

module.exports = {
  //Traer todos
  getAll: async function (req, res, next) {
    try {
      const documents = await productosModel.find().populate("categoria");
      res.status(200).json(documents);
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
  //Traer por ID
  getById: async function (req, res, next) {
    try {
      const product = await productosModel.findById(req.params.id);
      res.status(200).json(product);
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
  //Traer los productos que tienen la propiedad "featured" en true.
  getFeatured: async function (req, res, next) {
    try {
      const featured = await productosModel
        .find({ featured: true })
        .select("nombre precio descripcion categoria")
        .populate("categoria");
      res.status(200).json(featured);
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
  //Esta funcion tiene implementado la posibilidad de agregar multiples registros en un mismo request. Chequea si hay varios elementos o no.
  create: async function (req, res, next) {
    try {
      console.log(req.body);
      //si es un array avanza con el MAP, sino lo modifica para que sea un array de un solo elemento, para que funcione map
      const elementos = Array.isArray(req.body) ? req.body : [req.body];
      const registrosCreados = await Promise.all(
        elementos.map(async (elemento) => {
          const document = new productosModel({
            nombre: elemento.nombre,
            precio: elemento.precio,
            codigo: elemento.codigo,
            descripcion: elemento.descripcion,
            categoria: elemento.categoria,
            featured: elemento.featured,
          });
          await document.save();
        })
      );
      res.json(req.body);
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
  //TENTATIVA DE MODIFICAR educacions

  modify: async function (req, res, next) {
    try {
      await productosModel.updateOne({ _id: req.params.id }, req.body);
      res.status(201).send("Producto Actualizado con éxito!");
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },

  delete: async function (req, res, next) {
    try {
      await productoModel.deleteOne({ _id: req.params.id });
      res.status(200).send("Producto Eliminado con éxito!");
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
};
