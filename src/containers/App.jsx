import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../actions';
import LoginInput from '../components/LoginInput';

const App = ({ loginStatus, actions }) => (
	<div>
		<LoginInput loginStatus={loginStatus} actions={actions} />
	</div>
);

App.propTypes = {
	loginStatus: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	loginStatus: state.loginStatus
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(LoginActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
