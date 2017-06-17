import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../actions';
import LoginInput from '../components/LoginInput';

const App = ({ actions }) => (
	<div>
		<LoginInput actions={actions} />
	</div>
);

App.propTypes = {
	actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	username: state.username,
	password: state.password,
	loginMsg: state.loginMsg,
	isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(LoginActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
