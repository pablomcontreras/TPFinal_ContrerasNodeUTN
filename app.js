var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require("./routes/usuarios");
var productosRouter = require('./routes/productos');
var categoriasRouter = require("./routes/categorias")
var jwt = require("jsonwebtoken");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);
app.use("/categorias", categoriasRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page 
  res.status(400).json(err.message);
});

//verificar Token

function verificarToken(req, res, next) {
  jwt.verify(req.body["x-access-token"], "1234567", function (error, payload) {
    if (error) {
      res.json({ message: error.message });
    } else {
      console.log("Payload:", payload);
          next();
    }

   })
}

app.verificarToken = verificarToken;

module.exports = app;
