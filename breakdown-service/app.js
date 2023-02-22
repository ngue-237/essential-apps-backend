var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const eurekaHelper = require("./eureka-config");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/breakdowns', indexRouter);
app.use('/users', usersRouter);
eurekaHelper.registerWithEureka("breakdown-service", 8084);
module.exports = app;
