console.log("client rendering");

Router.route("/", function() {
	React.renderComponent(new MainAtom(), document.body);
});
