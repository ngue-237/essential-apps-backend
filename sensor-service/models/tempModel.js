const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var tempSensor= new Schema( 
    { 
        name:String,
        value:Number
    } 
   ); 
  
module.exports = mongoose.model('tempSensor', tempSensor); 