const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var NpkSensor= new Schema( 
    { 
        name:String,
        valueN:Number,
        valueP:Number,
        valueK:Number,
        valuePh:Number,
    } 
   );

module.exports = mongoose.model('npkSensor', NpkSensor); 