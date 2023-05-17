var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose= require("mongoose");
const http = require('http')
var configDB =require("./configDb/dbConfig.json"); 
var cors = require('cors');
const whitelist = ['http://localhost:4200'];

var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");
var nodeRouter = require("./routes/node");
var tempRouter = require("./routes/temp");
var camRouter = require("./routes/cam");
var lightRouter = require("./routes/light");
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
// const socketIO = require('socket.io');
// const server = http.createServer(app);
// const io = socketIO(server,{ pingTimeout: 30000,
//   pingInterval: 5000,
//   upgradeTimeout: 30000, // default value is 10000ms, try changing it to 20k or more
//   cors: {
//     origin: ['http://localhost:4200'],
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['my-custom-header'],
//     credentials: true
//   }});
//   const corsOptions = {
//     origin: (origin, callback) => {
//       if (whitelist.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     }
//   };
  
//   io.set('cors', corsOptions);
// var senderMsg="test"
// server.listen(3000)
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

 // Gérer la connexion d'un client Socket.io
//  io.on('connection', (socket) => {
//   console.log('Nouvelle connexion Socket.io :', socket.id);
//   io.emit("pas","senderMsg")
//   io.on("yo",data=>{console.log(data);})
//   // Écouter l'événement 'disconnect' lorsque le client se déconnecte
//   socket.on('disconnect', () => {
//     console.log('Déconnexion Socket.io :', socket.id);
//   });
// });


app.use("/", indexRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/sensors", nodeRouter);
app.use("/api/v1/sensors/temp", tempRouter);
app.use("/api/v1/sensors/cam", camRouter);
app.use("/api/v1/sensors/fire", fireRouter);
app.use("/api/v1/sensors/water", waterRouter);
app.use("/api/v1/sensors/dht11", dht11Router);
app.use("/api/v1/sensors/light", lightRouter);
app.use("/api/v1/sensors/moisture", moistureRouter);

//eurekaHelper.registerWithEureka("sensor-service", 8085);
module.exports = {app};
