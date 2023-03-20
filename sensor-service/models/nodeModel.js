const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
temp= require('./tempModel.js');
npk= require('./npkModel.js');
cam =require('./camModel.js');
moisture= require('./moistureModel.js');
user= require('./userModel.js');

var Node= new Schema( 
 { 
    name:String,
    temp:[  { type : mongoose.Schema.Types.ObjectId, ref : 'tempSensor' }],
    cam:[  { type : mongoose.Schema.Types.ObjectId, ref : 'camSensor' }],
    npk:[  { type : mongoose.Schema.Types.ObjectId, ref : 'npkSensor' }],
    moisture:[  { type: mongoose.Schema.Types.ObjectId, ref: 'moistureSensor' }],
    user:[  { type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
 } 
); 

module.exports = mongoose.model('node', Node); 