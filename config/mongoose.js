const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://127.0.0.1:27017/TPFinal_ContrerasDB`)
  .then(() => {
    console.log("Conectado a la DB");
  })
  .catch((error) => console.log(error));

module.exports = mongoose;
