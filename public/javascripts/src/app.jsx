// jQuery
var $ = jQuery = require('../../libraries/jquery/jquery-1.11.3.min.js');

// React
var React = require('react');

//  Custom components
var StoryBoard = require('./storyboard.jsx');

React.render(
	<StoryBoard />,
	document.getElementById('maincontent')
); 