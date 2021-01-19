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
		id: "kwh",
		name: "King William Hotel",
		description: "Small group website project with Ruby on Rails, it was designed to book appointments for customers, display the full invoice of the hotel services to both the customer and staff of the hotel, and have customer pay for these invoices. This was the first time using rails and ruby, so the main challenge is to get used to integrating both the site and database appropriately.",
		date: "December 2017",
		tech: "RubyOnRails",
		link: "https://github.com/amaraladil/KWH_RubyOnRails",
		image: "hotel.jpg",
		code: [
			{
				name: 'icon-ruby'
			},
			{
				name: 'icon-rails'
			}
		]
	},
	{
		id: "theater",
		name: "Scalable Theater Bookings",
		description: "A theater bookings system, where it allows owner to book movie and time for users. It displays statistics that may help the owner see what is the revenue and profit times.",
		date: "April 2016",
		tech: "VB, MS SQL, Visual Studio",
		link: "https://github.com/amaraladil/TheaterProject",
		image: "theaterVB.PNG",
		code: [
			{
				name: 'icon-dot-net'
			},
			{
				name: 'icon-visualstudio'
			}
		],
		extraImage: ['m1x03lZKkA.gif']
	},
	{
		id: "realtor",
		name: "Realtor Website",
		description: "The website got a recent overhaul on its design, it became more modernized and is now responsive to different screen sizes - compared to the old layout, which needed a new look. A web development class group project that is designed to handle online real estate for both buyer and seller. The system is able to edit the account and show all the available housing in the market, in the specified city locations or different variety of criterias. I was the project planner/lead, focused on the backend. As the Website needed a revision on its style after all these years, the website got an overhaul on it's design.",
		date: "December 2016",
		tech: "PHP, jQuery, PostgreSQL",
		link: "https://github.com/amaraladil/Realtor-Website",
		image: "realtor-new.PNG",
		web: 'https://realtorwebsite-project.herokuapp.com/',
		code: [
			{
				name: 'icon-php'
			},
			{
				name: 'icon-postgresql'
			}
		],
		extraImage: ['realtor.PNG']
	},
	{
		id: "durak",
		name: "Durak Cards",
		description: "Used C# to design a russian card game, called Durak. You play against an AI player, each player take turns to up the previous card value. It has a full GUI design for the Player to be able to play the game. There is different choices for the Player, as the number of decks allowed in the game. As the game starts, it will choose which suit is highly valued. If clubs gets chosen, it has five more points added on top of its value. The window can show a statistic of the player's record, from how many wins to which number of cards was started.",
		date: "April 2017",
		tech: "C#, Visual Studio",
		link: "https://github.com/amaraladil/DurakGame",
		image: "Durak.PNG",
		code: [
			{
				name: 'icon-csharp'
			},
			{
				name: 'icon-postgresql'
			}
		],
		extraImage: ['bntWV3YdDx.gif']
	},
	{
		id: "portfolio",
		name: "Portfolio",
		description: "The current website - used Node, Express and Pug to create this website with mongoDB and mail service",
		date: "July 2019",
		tech: "Node, MongoDB, Pug",
		link: "https://github.com/amaraladil/Portfolio",
		image: "PortfolioPage.PNG",
		code: [
			{
				name: 'icon-javascript'
			},
			{
				name: 'icon-node-dot-js'
			},
			{
				name: 'icon-mongodb'
			},
			{
				name: 'icon-bootstrap'
			}
		]
	},
	{
		id: "zelda",
		name: "Zelda Imitation Game",
		description: "A 2D game project of a imitation of Zelda. As a school project, It gave an indepth feel around animating, designing levels and adding new components (Like Health bar, Pots, Heart Pickup).",
		date: "March 2020",
		tech: "C#, Unity",
		link: "https://github.com/amaraladil/InteractiveProjects",
		image: "zelda.PNG",
		code: [
			{
				name: 'icon-csharp'
			},
			{
				name: 'icon-unity'
			},
			{
				name: 'icon-visualstudio'
			}
		],
		extraImage: ['yfhQAailpt.gif', 'JzMWRZ7m8V.gif']
	},
	{
		id: "blackjack",
		name: "Black Jack Game",
		description: "Terminal-based game, where the player can play a game of black jack with a dealer and up to four AI players. The player can choose to hit or stay during the round, giving them options - plus each round they can choose how many chips they can bet each time.",
		date: "December 2018",
		tech: "C++",
		link: "https://github.com/amaraladil/Black-Jack-Game",
		image: "blackjack.PNG",
		code: [
			{
				name: 'icon-cplusplus'
			}
		],
		web: 'https://onlinegdb.com/H1nBmxiiP'
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
