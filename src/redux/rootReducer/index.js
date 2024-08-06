// src/reducers/index.js
import { combineReducers } from 'redux';
import dataReducer from '../reducers';

export default combineReducers({
  data: dataReducer,
});
