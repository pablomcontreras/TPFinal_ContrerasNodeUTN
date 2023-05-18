const mongoose = require("../config/mongodb");

const usuariosSchema = mongoose.Schema({
  Nombre: String,
  Apellido: Number,
  email: String,
  username: String,
  password: {},
});

module.exports = mongoose.model("usuarios", habilidadesSchema);
