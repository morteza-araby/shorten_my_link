import React, { Component } from 'react';

export default class LinkCreate extends Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<label>Link to be shorten</label>
					<input className="form-control" />					
				</div>
				<button className="btn btn-primary">Shorten</button>
			</form>
		);
	}
}