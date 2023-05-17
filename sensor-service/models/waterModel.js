const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var WaterSensor= new Schema( 
    { 
        value: Number,
        time:{hr:String, date:String}
    } 
   ); 
  
module.exports = mongoose.model('waterSensor', WaterSensor); 