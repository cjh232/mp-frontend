import { combineReducers } from 'redux'
import SearchReducer from './searchReducer';
import authState from './authState';
import LoginError from './loginError';


const rootReducer = combineReducers({authState, LoginError, SearchReducer})

export default rootReducer;