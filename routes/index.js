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
		description: "Small website project with Ruby on Rails and is designed to book appointments for customers. It displays the full invoice of the hotel services to both the customer and staff of the hotel.",
		date: "December 2017",
		tech: "RubyOnRails",
		link: "https://github.com/amaraladil/KWH_RubyOnRails",
		image: ""
	},
	{
		name: "Theater Project",
		description: "A theater bookings system, where it allows owner to book movie and time for users. It displays statistics that may help the owner see what is the revenue and profit times.",
		date: "April 2016",
		tech: "VB, MS SQL, Visual Studio",
		link: "https://github.com/amaraladil/TheaterProject",
		image: "theaterVB.PNG"
	},
	{
		name: "Realtor Website",
		description: "A web development class group project that is designed for realtors. I was the project planner/lead, focused on the backend. The difficulty I had most on this was the search process for all the houses",
		date: "December 2016",
		tech: "PHP, Postgre SQL",
		link: "https://github.com/amaraladil/Realtor-Website",
		image: "realtor.PNG"
	},
	{
		name: "Durak Game",
		description: "Used C# to design and program the game to functionally working. Is a game against an AI that plays Durak with the player.",
		date: "April 2017",
		tech: "C#, Visual Studio",
		link: "https://github.com/amaraladil/DurakGame",
		image: "Durak.PNG"
	},
	{
		name: "Cobol Transactions Paper",
		description: "A mainframe program that seperates each transaction records to specific webpages.",
		date: "April 2017",
		tech: "COBOL",
		link: "https://github.com/amaraladil/Cobol-And-CICS",
		image: ""
	},
	{
		name: "Portfolio",
		description: "The current website - used Node, Express and Pug to create this website with mongoDB and mail service",
		date: "July 2019",
		tech: "Node, MongoDB, Pug",
		link: "https://github.com/amaraladil/Portfolio",
		image: "PortfolioPage.PNG"
	},
	{
		name: "Unity Project",
		description: "Made 3D and 2D projects for school, just getting the feel around animating and designing levels through each projects.",
		date: "March 2020",
		tech: "C#, Unity",
		link: "https://github.com/amaraladil/InteractiveProjects",
		image: ""
	},
	{
		name: "Black Jack Game",
		description: "This is a full black jack game against an AI opponent, with variety of options for the user to use.",
		date: "December 2018",
		tech: "C++",
		link: "https://github.com/amaraladil/Black-Jack-Game",
		image: ""
	}
	];

  res.render('projects', { title: "Amar's Projects", projects, activePortfolio: true });
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
