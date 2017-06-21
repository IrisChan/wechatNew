import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/login.css';

export default class LoginInput extends Component {
	static propTypes = {
		loginStatus: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleLogin = () => {
		const { username, password } = this.state;
		this.props.actions.login(username, password);
	}

	render() {
		const { username, password } = this.state;
		const { loginMsg } = this.props.loginStatus;
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
						<p />
						<span>{loginMsg}</span>
					</div>
				</div>
			</div>
		);
	}
}
