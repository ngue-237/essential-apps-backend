const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

   var moistureSensor= new Schema( 
    { 
        name:String,
        value:Number
    } 
   );

   module.exports = mongoose.model('moistureSensor', moistureSensor);    