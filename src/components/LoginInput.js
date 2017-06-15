import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginInput extends Component {
	static propTypes = {
		username: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		onSubmit: PropTypes.func.isRequired
	};

	state = {
		username: this.props.username || '',
		password: this.props.password || ''
	}

	onSubmit() {
		const { username, password } = this.state;
		this.props.onSubmit(username, password);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div>
					<input
						type="text"
						id="username"
						value={this.state.username}
					/>
					<span />
					<input
						type="text"
						id="password"
						value={this.state.password}
					/>
					<span />
					<button onClick={this.onSubmit}> Log In</button>
				</div>
			</form>
		);
	}
}
