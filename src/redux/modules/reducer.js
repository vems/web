import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import sum from './sum';


export default combineReducers({
  routing: routerReducer,
  sum
});
