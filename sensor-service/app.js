var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose= require("mongoose");
var configDB=require('./configDb/dbConfig.json'); 
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(http);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const eurekaHelper = require("./eureka-config");

mongoose.set('strictQuery', false);

const connect = mongoose.connect(
    
     configDB.mongo.uri , 
     { 
     useNewUrlParser: true , 
     useUnifiedTopology: true 
     }, 
     ()=> console.log("Connected to DB !!") 
    ); 
    

var app = express();

io.on('connection', socket => {
    console.log(socket);
  }); 

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1/sensors", usersRouter);

eurekaHelper.registerWithEureka("sensor-service", 8085);
module.exports = app;
