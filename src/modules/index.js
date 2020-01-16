import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import general from './general';
import items from './items';
import modal from './modal';
import goals from './goals';


export default combineReducers({
	routing: routerReducer,
	general,
	items,
	modal,
	goals,
})
