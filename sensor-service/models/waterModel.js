const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var WaterSensor= new Schema( 
    { 
        name:String,
        value:Number
    } 
   ); 
  
module.exports = mongoose.model('waterSensor', WaterSensor); 