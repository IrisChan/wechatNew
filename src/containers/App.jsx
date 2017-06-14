import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as LoginActions from '../actions';

const Login = ({credentials, actions}) => (
	<div>
		<Login credentials={credentials} actions={actions} />
	</div>
);

Login.propTypes = {
	actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	credentials: state.credentials
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(LoginActions, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);