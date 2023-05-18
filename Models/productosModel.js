const mongoose = require("../config/mongodb");

const productoSchema = mongoose.Schema({
  nombre: String,
  precio: Number,
  codigo: String,
  descripcion: String,
  featured: Boolean
});

module.exports = mongoose.model("productos", productoSchema);
