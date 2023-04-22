const mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var User= new Schema( 
{ 
    name:String,
    firstname:String,
    email:String,
    mdp:String,
    role:String,
    tel:Number
} 
); 

module.exports = mongoose.model('user', User); 