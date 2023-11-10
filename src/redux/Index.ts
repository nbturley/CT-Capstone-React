import { combineReducers } from 'redux'
import { carReducer } from './slices/CarSlice';
import { logReducer } from './slices/LogSlice';

export default combineReducers({
  carReducer,
  logReducer
})