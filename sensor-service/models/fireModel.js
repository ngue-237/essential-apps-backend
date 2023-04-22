const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

   var FireSensor= new Schema( 
    { 
        name:String,
        value:Number
    } 
   );

   module.exports = mongoose.model('fireSensor', FireSensor);    