const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var Dht11Sensor= new Schema( 
    { 
        temperature:Number,
        humidity:Number,
        time:{hr:String, date:String}
    } 
   ); 
  
module.exports = mongoose.model('dht11Sensor', Dht11Sensor); 