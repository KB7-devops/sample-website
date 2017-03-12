// require express
var express = require('express');
var path    = require('path');

//create our router object
var router = express.Router();

//export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
	res.render('pages/index.ejs');
});

// route for our aboutpage
router.get('/about', function(req, res) {
	var users = [
	{name: "Karim", email: 'karim.benmoussa33@gmail.com', avatar: 'https://thumb7.shutterstock.com/display_pic_with_logo/260206/304870961/stock-photo-the-wolf-face-on-white-background-double-exposure-304870961.jpg'}
	];

	res.render('pages/about.ejs', { users : users});
});

// route for our contact page
router.get('/contact', function(req, res) {
	res.render('pages/contact.ejs');
});
router.post('/contact', function(req, res){
	res.send('Thanks for contacting us, ' + req.body.name + '! I will respond shortly!' );
});