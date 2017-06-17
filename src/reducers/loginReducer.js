import { LOG_IN, LOG_OUT } from '../constants/ActionTypes';

const initialState = {
	isLoggedIn: false,
	username: '',
	password: '',
	loginMsg: ''
};

export default function login(state = initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return {
				isLoggedIn: true,
				loginMsg: 'Login is successful!',
				...state
			};
		case LOG_OUT:
			return {
				isLoggedIn: false,
				loginMsg: 'Logout is successful!',
				...state
			};
		default:
			return state;
	}
}

