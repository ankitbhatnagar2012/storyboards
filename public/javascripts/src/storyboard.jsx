var React = require('react');

var Alert = require('react-bootstrap/lib/Alert');

var AlertInstance = React.createClass({
	render : function() {
		return (
			<Alert bsStyle='success'>
				<strong>This appears to be working fine!</strong>
			</Alert>
		);
	}
});

module.exports = React.createClass({
	
	getInitialState : function() {
		return {
			myTitle : 'Storyboards are awesome!'
		};
	},

	render: function() {
		return (
			<div>
				<AlertInstance />
				<h2>
					{ this.state.myTitle }
				</h2>
			</div>
		);
	}
});