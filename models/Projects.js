var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: String, required: true}
});

// Virtual for projects's URL
ProjectsSchema
    .virtual('url')
    .get(function () {
        return '/projects/show/' + this._id;
});

//Export model
module.exports = mongoose.model('Projects', ProjectsSchema);