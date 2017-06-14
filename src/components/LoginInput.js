import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginInput extends Component {
	static propTypes = {
		username: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		onSubmit: PropTypes.func.isRequired
	};

	constructor() {
		super();
		this.state = {
			username: '', 
			password: ''
		};
		this.onSubmit = this.onSubmit.bind(this);
	}


	onSubmit = e => {
		this.props.onSubmit(username, password);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div>
					<input
						type="text"
						autofocus="true"
						id="username"
						value={this.state.username}
					/>
					<input
						type="text"
						id="password"
						value={this.state.password}
					/>
					<button onClick={this.onSubmit} />
				</div>
			</form>
		);
	};
}