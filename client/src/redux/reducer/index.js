/** @format */

import { combineReducers } from 'redux';
import userReducer from './user';
import registerReducer from './register';

const allReducers = combineReducers({
  users: userReducer,
  register: registerReducer,
  login: registerReducer,
});

export default allReducers;
