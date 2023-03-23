var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var mongoose = require("mongoose");
var config = require("./database/mongodb.json");

const eurekaHelper = require("./eureka-config");
var panneRouter = require("./routes/panne");

var app = express();
const uri = "mongodb://0.0.0.0:27017/breakdown_db";
mongoose.connect(uri, {
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => console.log("connected !"))
  .on("error", (error) => {
    console.log("My error", error);
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/breakdowns", panneRouter);
// eurekaHelper.registerWithEureka("breakdown-service", 8084);
module.exports = app;
