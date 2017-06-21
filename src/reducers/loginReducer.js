import { LOG_IN, LOG_OUT } from '../constants/ActionTypes';

const initialState = {
	isLoggedIn: false,
	loginMsg: ''
};

export default function loginStatus(state = initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return {
				isLoggedIn: true,
				loginMsg: 'Login is successful!'
			};
		case LOG_OUT:
			return {
				isLoggedIn: false,
				loginMsg: 'Logout is successful!'
			};
		default:
			return state;
	}
}

