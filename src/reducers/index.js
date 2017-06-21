import { combineReducers } from 'redux';
import loginStatus from './loginReducer';

const rootReducer = combineReducers({
	loginStatus
});

export default rootReducer;
