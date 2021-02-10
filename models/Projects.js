var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectsSchema = new Schema({
    id: { type: String },
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: String, required: true},
    tech: { type: String },
    link: { type: String },
    image: { type: String },
    code: { type: [String] },
    extraImage: { type: [String] },
    web: { type: String }
});

// Virtual for projects's URL
ProjectsSchema
    .virtual('url')
    .get(function () {
        return '/projects/show/' + this._id;
});

//Export model
module.exports = mongoose.model('Projects', ProjectsSchema);