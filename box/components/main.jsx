/** @jsx React.DOM */

MainAtom = React.createClass({
	mixins: [ReactMeteor.Mixin],
	getMeteorState: function() {
		return this.state;
	},
	render: function() {
		return (
			<div className="content">
				<div> Amy is here!!!</div>
				<div> It is another box!!! </div>
				<div> Get ready for your (virtual) unboxing! </div>
				<a href="http://amyoclock.meteor.com/">
					<div className="box" onHo />
				</a>
			</div>
		);
	}
});