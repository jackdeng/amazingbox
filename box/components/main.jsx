/** @jsx React.DOM */

MainAtom = React.createClass({
	mixins: [ReactMeteor.Mixin],
	getMeteorState: function() {
		return this.state;
	},
	render: function() {
		return (
			<div>HI</div>
		);
	}
});