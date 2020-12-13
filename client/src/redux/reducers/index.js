import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import levels from './levels';

export default combineReducers({ alert, auth, levels });
