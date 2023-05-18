const mongoose = require("../config/mongodb");

const categoriasSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Debe proporcionar un nombre de la categoria"],
  },
  descripcion: String,
});

module.exports = mongoose.model("categorias", categoriasSchema);
