const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var LightSensor= new Schema( 
    { 
        name:String,
        value:Number
    } 
   );

module.exports = mongoose.model('lightSensor', LightSensor); 