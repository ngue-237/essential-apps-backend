const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var User= new Schema( 
{ 
    name:String,
    firstname:String,
    email:String,
} 
); 

module.exports = mongoose.model('user', User); 