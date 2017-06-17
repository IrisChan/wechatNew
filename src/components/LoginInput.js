import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/login.css';

export default class LoginInput extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			loginMsg: '',
			isLoggedIn: false
		};
	}

	handleLogin = () => {
		const { username, password } = this.state;
		this.props.actions.login(username, password);
	}

	render() {
		const { username, password } = this.state;
		return (
			<div className="div-outer">
				<div className="div-middle">
					<div className="div-inner">
						<InputGroup>
							<FormControl
								className="input-group"
								id="username"
								type="text"
								placeholder="User ID"
								autoFocus="true"
								onChange={e => this.setState({ username: e.target.value || '' })}
								value={username}
							/>
						</InputGroup>
						<InputGroup>
							<FormControl
								className="input-group"
								id="password"
								type="text"
								placeholder="Password"
								onChange={e => this.setState({ password: e.target.value || '' })}
								value={password}
							/>
						</InputGroup>
						<Button
							className="button"
							bsStyle="success"
							onClick={this.handleLogin}
						>Log In
						</Button>
						<Button
							bsStyle="warning"
							className="button"
						>Forget Password
						</Button>
						<span>{this.state.loginMsg}</span>
					</div>
				</div>
			</div>
		);
	}
}
