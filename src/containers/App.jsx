import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../actions';
import LoginInput from '../components/LoginInput';

const Login = ({ actions }) => (
	<div>
		<LoginInput actions={actions} />
	</div>
);

Login.propTypes = {
	actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(LoginActions, dispatch)
});

export default connect(
	mapDispatchToProps
)(Login);
