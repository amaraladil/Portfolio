var express = require('express');
var router = express.Router();
const Projects = require('../models/Projects');
// Require controller modules.
var projects_controller = require('../controllers/projects');
var contact_controller = require('../controllers/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Amar's Website", activeIndex: true });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: "Amar's Blog", activeBlog: true });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: "Amar's Portfolio", activePortfolio: true });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Amar's Contact", activeContact: true });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: "Amar's About Page", activeAbout: true });
});

router.get('/project', function(req, res, next) {
	//JSON List of projects that'll loop through in webpage
	var projects = [
	{
		name: "King William Hotel",
		description: "Small website project with Ruby on Rails and is designed to book appointments for customers.",
		date: "December 2017",
		source: "RubyOnRails",
		link: "#",
		image: ""
	},
	{
		name: "Theater Project",
		description: "Visual Basic Project that displays a theater room, where users can book seats, and show reports for each theater schedule.",
		date: "April 2016",
		source: "VB, MS SQL, Visual Studio",
		link: "#",
		image: ""
	},
	{
		name: "Realtor Website",
		description: "A web development class group project that is designed for realtors. Was the project planner/lead, focused on the backend ",
		date: "December 2016",
		source: "PHP, Postgre SQL",
		link: "https://realtorwebsite-project.herokuapp.com/",
		image: "realtor.PNG"
	},
	{
		name: "Durak Game",
		description: "Used C# to design and program the game to functionally working.",
		date: "April 2017",
		source: "C#, Visual Studio",
		link: "#",
		image: ""
	},
	{
		name: "Cobol Transactions Paper",
		description: "A mainframe program that seperates each transaction records to specific webpages.",
		date: "April 2017",
		source: "COBOL",
		link: "#",
		image: ""
	},
	{
		name: "Portfolio",
		description: "The current website - used Node, Express and Pug to create this website with mongoDB and mail service",
		date: "July 2019",
		source: "Node, MongoDB, Pug",
		link: "/",
		image: "PortfolioPage.PNG"
	}
	];

  res.render('projects', { title: "Amar's Hidden Project", projects, activePortfolio: true });
});

router.post('/project', projects_controller.insertProject);



router.get('/newProject', function(req, res, next) {
    
    
    var newProjects = new Projects({
        name: "Cobol Transactions Paper",
		description: "A mainframe program that seperates each transaction records to specific webpages.",
		date: "April 2017"
    });
    
    newProjects.save(function (err, Projects) {
        if (err) return console.error(err);
        console.log("New Projects created!")
        console.log(Projects)
    });
});


router.get('/current_projects', projects_controller.getProjects);

router.post('/contact', contact_controller.sendTheMail);

module.exports = router;
