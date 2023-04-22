const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var Dht11Sensor= new Schema( 
    { 
        name:String,
        temperature:Number,
        humidity:Number
    } 
   ); 
  
module.exports = mongoose.model('dht11Sensor', Dht11Sensor); 