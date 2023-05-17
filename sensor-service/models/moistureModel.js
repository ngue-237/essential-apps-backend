const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

   var MoistureSensor= new Schema( 
    {       
          value:Number,
          time:{hr:String, date:String}
    } 
   );

   module.exports = mongoose.model('moistureSensor', MoistureSensor);    