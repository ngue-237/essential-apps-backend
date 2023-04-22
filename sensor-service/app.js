var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose= require("mongoose");
const http = require('http').createServer(app);
var configDB =require("./configDb/dbConfig.json"); 
var cors = require('cors');
const io = require('socket.io')(); 
require('./socket/socket')(io)     

var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var nodeRouter = require("./routes/node");
var tempRouter = require("./routes/temp");
var camRouter = require("./routes/cam");
var ligthRouter = require("./routes/ligth");
var dht11Router = require("./routes/dht11");
var fireRouter = require("./routes/fire");
var waterRouter = require("./routes/water");
var moistureRouter = require("./routes/moisture");
const eurekaHelper = require("./eureka-config");

mongoose.set('strictQuery', false);

const connect = mongoose.connect(
  
  configDB.mongo.uri , 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  }, 
  ()=> console.log("Connected to DB !!") 
 ); 

var app = express();

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// io.on('connection', (socket) => {
  
//   console.log('a user connected');
  
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
  
//   socket.on('my message', (msg) => {
//     console.log('message: ' + msg);
//   });
// });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/sensors", nodeRouter);
app.use("/api/v1/temp", tempRouter);
app.use("/api/v1/cam", camRouter);
app.use("/api/v1/fire", fireRouter);
app.use("/api/v1/water", waterRouter);
app.use("/api/v1/dht11", dht11Router);
app.use("/api/v1/ligth", ligthRouter);
app.use("/api/v1/moisture", moistureRouter);

//eurekaHelper.registerWithEureka("sensor-service", 8085);
module.exports = {app, io};
