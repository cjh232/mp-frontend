import { combineReducers } from 'redux'
import SearchReducer from './searchReducer';
import {AuthReducers} from './authReducers';
import { ProductReducers } from './productReducers'

const rootReducer = combineReducers({AuthReducers, SearchReducer, ProductReducers})

export default rootReducer;