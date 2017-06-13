import React, { Component } from 'react';

export default class LinkCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
		};
	}
	handleSubmit(e){
		e.preventDefault();

		// pull the value out and validate it
		Meteor.call('links.insert', this.refs.input.value, (error) => {
			if(error){
				this.setState({ error: error.message});
			} else {
				this.setState({ error: ''});
				this.refs.input.value = '';
			}
		});

	}
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<label>Link to be shorten</label>
					<input ref="input" className="form-control" />					
				</div>
				<div className="text-danger">{this.state.error}</div>
				<button className="btn btn-primary">Shorten</button>
			</form>
		);
	}
}