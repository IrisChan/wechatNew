import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
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
			<div>
				<InputGroup>
					<FormControl
						id="username"
						type="text"
						placeholder="UserID"
						autoFocus="true"
						value={this.state.username}
					/>
				</InputGroup>
				<InputGroup>
					<FormControl
						id="password"
						type="text"
						placeholder="Password"
						autoFocus="true"
						value={this.state.password}
					/>
				</InputGroup>
				<Button bsStyle="success">Log In</Button>
			</div>
		);
	}
}
