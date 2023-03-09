const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var CamSensor= new Schema( 
{ 
    name:String,
} 
); 

module.exports = mongoose.model('camSensor', CamSensor); 