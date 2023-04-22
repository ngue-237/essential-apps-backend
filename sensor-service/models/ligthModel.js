const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 
var LigthSensor= new Schema( 
    { 
        name:String,
        value:Number
    } 
   );

module.exports = mongoose.model('ligthSensor', LigthSensor); 