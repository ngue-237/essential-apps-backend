const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var camSensor= new Schema( 
{ 
    name:String,
} 
); 

module.exports = mongoose.model('camSensor', camSensor); 