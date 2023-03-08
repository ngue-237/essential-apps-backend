const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var TempSensor= new Schema( 
    { 
        name:String,
        value:Number
    } 
   ); 
  
module.exports = mongoose.model('tempSensor', TempSensor); 