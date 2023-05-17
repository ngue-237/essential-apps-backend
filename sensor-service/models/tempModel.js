const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var TempSensor= new Schema( 
    { 
        value:Number,
        time:{hr:String, date:String}
    } 
   ); 
  
module.exports = mongoose.model('tempSensor', TempSensor); 