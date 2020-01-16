import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import general from './general';
import items from './items';
import modal from './modal';


export default combineReducers({
	routing: routerReducer,
	general,
	items,
	modal,
})
