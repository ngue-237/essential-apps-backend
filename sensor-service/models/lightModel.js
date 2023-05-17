const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var LightSensor= new Schema( 
    { 
        value:Number,
        time:{hr:String, date:String}
    } 
   );

module.exports = mongoose.model('lightSensor', LightSensor); 