const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
temp= require('./tempModel.js');
npk= require('./npkModel.js');
cam =require('./camModel.js');
moisture= require('./moistureModel.js');

var node= new Schema( 
 { 
    name:String,
    temp:[  { type : mongoose.Schema.Types.ObjectId, ref : 'tempSensor' }],
    cam:[  { type : mongoose.Schema.Types.ObjectId, ref : 'camSensor' }],
    npk:[  { type : mongoose.Schema.Types.ObjectId, ref : 'npkSensor' }],
    moisture:[  { type : mongoose.Schema.Types.ObjectId, ref : 'moistureSensor' }],
 } 
); 

module.exports = mongoose.model('node', node); 