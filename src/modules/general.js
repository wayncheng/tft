import {openModal,openGallery,} from './modal';
import {processItemKey} from './items';

export const FOCUS_KEY_HANDLER = 'general/FOCUS_KEY_HANDLER';
export const UPDATE_PREFS = 'general/UPDATE_PREFS';
export const WELCOME_PARTY = 'general/WELCOME_PARTY';

export const handledKeys = [
	'1', '2', '3', '4', '5', '6', '7', '8', '9',
	'shift+1', 'shift+2', 'shift+3', 'shift+4', 'shift+5', 'shift+6', 'shift+7', 'shift+8', 'shift+9',
	 // Help ..........
	'shift+/',
	'q',
	'h',
	// Targets ..........
	't',
	'g',
	// Toggle Combo Info, Details ..........
	'i',
	'd',
	// Cheat Sheets ..........
	'c',
	's',
]
const initialState = {
	keyHandlerFocused : false,
	prefs             : {
		showPerks        : false,
		showComboDetails : false,
		showKeybinds     : false,
	},
	// isFirstVisit: false,
	isFirstVisit      : true,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FOCUS_KEY_HANDLER:
			return {
				...state,
				keyHandlerFocused : true,
			};
		case WELCOME_PARTY:
			return {
				...state,
				isFirstVisit : true,
			};
		case UPDATE_PREFS:
			return {
				...state,
				prefs : {
					...state.prefs,
					...action.prefChanges,
				},
			};

		default:
			return state;
	}
};

// Key Presses ============
export const processKey = key => (dispatch, getState) => {
	const {general} = getState();
	const keyHasNumber = /\d/.test(key); // Check for number key press

	if (key === 'shift+/' || key === 'q' || key === 'h') {
		console.log('==== help / instructions ===>');
		// Open instructions modal
		dispatch(openModal('instructions'));
	} 
	else if (key === 'i' || key === 'd') {
		console.log('==== toggle combo details / info ===>');
		dispatch(setPrefs({showComboDetails: !general.prefs.showComboDetails}));
	} 
	else if (key === 't' || key === 'g') {
		// Open Goals/Targets modal
		console.log('===> open target panel ===>');
		dispatch(openModal('goals_modal'));
	}
	else if (key === 'c' || key === 's') {
		console.log('===> view cheat sheets ===>');
		dispatch(openGallery())
	}
	 else if (keyHasNumber === true) {
		// If the key isn't a "general" key, pass it along to the item key processor
		dispatch(processItemKey(key));
	} else {
		console.log('.... unhandle key press ....');
	}
};

// LAYER CONTROLS ========================================
export const focusKeyHandler = () => dispatch => {
	document.getElementById('item-page-root').focus();
	dispatch({type: FOCUS_KEY_HANDLER});
};

//----------------------------------------------------------------------
// PREFERENCES
//----------------------------------------------------------------------

// Whenever user changes preference... update the pref value in
// the state, then save the updated pref state locally.
export const setPrefs = prefChanges => dispatch => {
	dispatch(updatePrefState(prefChanges));
	dispatch(savePrefsLocally());
};

// Save pref state to local storage
export const savePrefsLocally = () => (dispatch, getState) => {
	const prefState = getState().general.prefs;
	localStorage.setItem('prefs', JSON.stringify(prefState));
};

// Pull previously saved prefs from local storage
export const setPrefsFromLocal = () => dispatch => {
	const prefsStr = localStorage.getItem('prefs');
	if (prefsStr !== undefined) {
		const localPrefs = JSON.parse(prefsStr);
		dispatch(updatePrefState(localPrefs));
	}
};

// Make changes to the pref state
export const updatePrefState = prefChanges => dispatch => {
	dispatch({
		type        : UPDATE_PREFS,
		prefChanges,
	});
};

// Check if first time visitor
export const welcomeNewVisitors = () => dispatch => {
	const hasVisited = localStorage.getItem('hasVisited');
	if (hasVisited !== 'true') {
		dispatch({type: WELCOME_PARTY});
		localStorage.setItem('hasVisited', 'true');

		// Open instructions modal
		dispatch(openModal('instructions'));
	}
};
