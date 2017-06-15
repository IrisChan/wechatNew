import * as types from '../constants/ActionTypes';

export const login = (username, password) => ({ type: types.LOG_IN, username, password });
export const logout = () => ({ type: types.LOG_OUT });
