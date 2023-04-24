const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
temp= require('./tempModel.js');
light= require('./lightModel.js');
water= require('./waterModel.js');
dht11= require('./dht11Model.js');
fire= require('./fireModel.js');
cam =require('./camModel.js');
moisture= require('./moistureModel.js');
user= require('./userModel.js');

var Node= new Schema( 
 { 
    name:String,
    temp:[  { type : mongoose.Schema.Types.ObjectId, ref : 'tempSensor' }],
    cam:[  { type : mongoose.Schema.Types.ObjectId, ref : 'camSensor' }],
    light:[  { type : mongoose.Schema.Types.ObjectId, ref : 'lightSensor' }],
    dht11:[  { type : mongoose.Schema.Types.ObjectId, ref : 'dht11Sensor' }],
    water:[  { type : mongoose.Schema.Types.ObjectId, ref : 'waterSensor' }],
    fire:[  { type : mongoose.Schema.Types.ObjectId, ref : 'fireSensor' }],
    moisture:[  { type: mongoose.Schema.Types.ObjectId, ref: 'moistureSensor' }],
    user:[ { type: mongoose.Schema.Types.ObjectId, ref: 'user' }  ],
    fan:Number,
    pump:Number
 } 
); 

module.exports = mongoose.model('node', Node); 