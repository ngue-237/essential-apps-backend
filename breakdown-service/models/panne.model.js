var mongoose = require('mongoose');

var panneSchema = new mongoose.Schema({
    nomPanne: {
        type: String,
        require:true
    }
});

module.exports = mongoose.model('Pannes', panneSchema);