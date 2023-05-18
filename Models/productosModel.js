const mongoose = require("../config/mongodb");

const productoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "El producto debe tener un nombre"],
  },
  precio: {
    type: Number,
    required: [true, "El producto debe tener un precio"],
    min: [0, "El precio debe ser mayor a 0"],
  },
  codigo: String,
  descripcion: String,
  categoria: {
    type: mongoose.Schema.ObjectId,
    ref: "categorias",
  },
  featured: Boolean,
});

productoSchema.virtual("precio_monetizado").get(function () {
  return `$ ${this.precio}`;
});

productoSchema.set("toJSON", { getters: true, virtuals: true });

module.exports = mongoose.model("productos", productoSchema);
