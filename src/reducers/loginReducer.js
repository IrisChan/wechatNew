import { LOG_IN, LOG_OUT } from '../constants/ActionTypes';

const initialState = {
	isLoggedIn: false,
	username: '',
	password: ''
};

export default function login(state = initialState, action) {
	switch (action.type) {
		case LOG_IN:
			return {
				isLoggedIn: true,
				...state
			};
		default:
			return state;
	}
}

