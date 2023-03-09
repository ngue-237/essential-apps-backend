const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

   var MoistureSensor= new Schema( 
    { 
        name:String,
        value:Number
    } 
   );

   module.exports = mongoose.model('moistureSensor', MoistureSensor);    