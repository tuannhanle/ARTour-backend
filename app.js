'use strict'
require('dotenv').config();
const createError = require('http-errors');

const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

// SET UP EXPRESS
const express = require('express');
const app = express();

// DATABASE SET UP
// const database = require('./database')();

// ROUTE SET UP
const route = require('./route')

// // WIT SET UP
// const wit =  require('./wit-router');
// wit.use(app);




// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// view engine use
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

// route engine use
route.use(app);

// your application here






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
