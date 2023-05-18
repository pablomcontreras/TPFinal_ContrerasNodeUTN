const mongoose = require("../config/mongodb");

const productosSchema = mongoose.Schema({
  nombre: String,
  precio: Number,
  codigo: String,
  descripcion: String,
    categoria: String,
  featured: Boolean,
});

module.exports = mongoose.model("productos", productosSchema);
