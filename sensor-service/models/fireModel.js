const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

   var FireSensor= new Schema( 
    { 
        value:Number,
        time:{hr:String, date:String}
    } 
   );

   module.exports = mongoose.model('fireSensor', FireSensor);    