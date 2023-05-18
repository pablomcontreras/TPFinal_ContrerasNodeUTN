const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt");

const usuariosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El nombre del usuario es obligatorio"],
  },
  apellido: String,
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
  },
  username: {
    type: String,
    required: [true, "El nombre de usuario es obligatorio"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
});
//Middleware que encripta la clave antes de guardarla
usuariosSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 12);
  next();
});

module.exports = mongoose.model("usuarios", usuariosSchema);
