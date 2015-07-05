var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('storyboard', { 
		title: 'Storyboard',
		storyboard_id: 12345 
	});
});

module.exports = router;