const usuariosModel = require("../Models/usuariosModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    //Traer todos los usuarios
  getAll: async function (req, res, next) {
    try {
      const documents = await usuariosModel.find();
      res.status(200).json(documents);
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
    },
    //Crear Usuario
  create: async function (req, res, next) {
    try {
      console.log(req.body.name);

      const document = new usuariosModel({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        username: req.body.username,
        password: req.body.password,
      });
      const response = await document.save();
      res.status(201).send("El usuario ha sido creado con exito");
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
//Modificar Usuario
  modify: async function (req, res, next) {
    try {
      await productosModel.updateOne({ _id: req.params.id }, req.body);
      res.status(201).send("Usuario Actualizado con éxito!");
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
//Eliminar Usuario
  delete: async function (req, res, next) {
    try {
      await usuariosModel.deleteOne({ _id: req.params.id });
      res.status(200).send("Usuario Eliminado con éxito!");
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
    },
  //Loguearse
  login: async function (req, res, next) {
    try {
      const user = await usuariosModel.findOne({ username: req.body.username });
      if (!user) {
        res.status(401).json({ message: "El usuario no existe" });
      }
      //si la contraseña es la misma que la almacenada (encriptada) en la db, genero el token
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = jwt.sign({ userId: user._id }, "1234567", {
          expiresIn: "1h",
        });
        res.status(201).json({ token });
      } else {
        res.status(401).json({ message: "Contraseña incorrecta" });
      }
    } catch (e) {
      console.log("Error: ", e);
      next(e);
    }
  },
};
