var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("dotenv").config();

var IndexRouter = require('./routes/index');
var NosotrosRouter = require ("./routes/nosotros");
var ServiciosRouter = require("./routes/servicios")
var GaleriaRouter = require("./routes/galeria");
var NovedadesRouter = require("./routes/novedades");
var ContactoRouter = require("./routes/contacto");
var LoginRouter = require("./routes/admin/login");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', IndexRouter);
app.use("/nosotros", NosotrosRouter );
app.use("/servicios", ServiciosRouter);
app.use("/galeria", GaleriaRouter);
app.use("/novedades", NovedadesRouter);
app.use("/contacto", ContactoRouter);
app.use("/admin/login", LoginRouter);




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
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
