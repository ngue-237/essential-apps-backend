var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// const eurekaHelper = require("./eureka-config");
var indexRouter = require('./routes/index');
var panneRouter = require('./routes/panne');
var usersRouter = require('./routes/users');
const { connecter } = require('./bd/connect');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

connecter("mongodb://127.0.0.1:27017/", (erreur)=>{
    if(erreur){
        console.log("Erreur durant la connexion avec la base de donnée");
        process.exit(-1);
    }else{
        console.log("Connexion avec la base de donnée réussie");
    }
});


app.use('/api/v1/breakdowns', panneRouter);
app.use('/users', usersRouter);
// eurekaHelper.registerWithEureka("breakdown-service", 8084);
module.exports = app;
