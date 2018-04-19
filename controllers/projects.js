const Projects = require('../models/Projects');

exports.getProjects = function(req, res) {
    
    // search the database for all the books using the model
    // we imported above.
    Projects.find({}).exec(function(error, projects){
        
        if (error){
            // handle error accordingly
        } else {
            // if books are returned, we can render the book.pug template
            // in our views folder and send all the books back with it.
            // in the books.pug file, we can choose how to display the books.
            // Note: the books object will exist as a local variable
            // in the books.pug file.
            res.render('projects', {
                message: "Successfully received",
                title: "Amar's Hidden Project",
                projects: projects
            });
        }
    })
};

exports.insertProject = function(req, res) {
    
    var newProjects = new Projects({
        name: req.body.name,
		description: req.body.description,
		date: req.body.date
    });
    
    newProjects.save(function (err, theProjects) {
        
        // search the database for all the books using the model
        // we imported above.
        Projects.find({}).exec(function(error, projects){

            if (error){
                // handle error accordingly
            } else {
                // if books are returned, we can render the book.pug template
                // in our views folder and send all the books back with it.
                // in the books.pug file, we can choose how to display the books.
                // Note: the books object will exist as a local variable
                // in the books.pug file.
                if (err) 
                {
                    res.render('projects', {
                        message: "Failed to Save",
                        title: "Amar's Hidden Project",
                        projects: projects
                    });
                }
                else 
                {
                    res.render('projects', {
                        message: "Successfully Saved",
                        title: "Amar's Hidden Project",
                        projects: projects
                    });
                }
            }
        })
    });
    
    
};