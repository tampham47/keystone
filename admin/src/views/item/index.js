var React = require('react'),
	CreateForm = require('./CreateForm'),
	EditForm = require('./EditForm'),
	Header = require('./Header');

var View = React.createClass({
	
	getInitialState: function() {
		return {
			createIsVisible: false
		};
	},
	
	toggleCreate: function(visible) {
		this.setState({
			createIsVisible: visible
		});
	},
	
	renderCreateForm: function() {
		if (!this.state.createIsVisible) return null;
		return <CreateForm list={Keystone.list} onCancel={this.toggleCreate.bind(this, false)} />
	},
	
	render: function() {
		return (
			<div>
				{this.renderCreateForm()}
				<Header list={Keystone.list} data={Keystone.item} drilldown={Keystone.drilldown} toggleCreate={this.toggleCreate} />
				<EditForm list={Keystone.list} data={Keystone.item} />
			</div>
		);
	}
	
});

exports.render = function(view) {
	React.render(<View />, document.getElementById('item-view'));
};
