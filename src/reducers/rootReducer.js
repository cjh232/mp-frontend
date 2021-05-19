import { combineReducers } from 'redux'
import SearchReducer from './searchReducer';
import {AuthReducers} from './authReducers';


const rootReducer = combineReducers({AuthReducers, SearchReducer})

export default rootReducer;