import {openModal,openGallery,} from './modal';
import {processItemKey} from './items';
import constants from '../utils/constants';
// import itemSheetLocal from '../static/img/beta/tft-sheet-item-beta.png';
// import fullSheetLocal from '../static/img/beta/tft-sheet-full-beta.png';
// import wideSheetLocal from '../static/img/beta/tft-sheet-wide-beta.png';


export const FOCUS_KEY_HANDLER = 'general/FOCUS_KEY_HANDLER';
export const UPDATE_PREFS = 'general/UPDATE_PREFS';
export const WELCOME_PARTY = 'general/WELCOME_PARTY';
export const SET_PATCH_VERSION = 'general/SET_PATCH_VERSION';

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
	patch_version: 'beta',
	constants: {
		item_sheet: '#',
		full_sheet: '#',
		wide_sheet: '#',
		item_sheet_local: '#',
		full_sheet_local: '#',
		wide_sheet_local: '#',
		// item_sheet: 'https://progameguides.com/wp-content/uploads/2019/06/tft-item-cheat-sheet-set-3-2.png',
		// full_sheet: 'https://progameguides.com/wp-content/uploads/2019/06/tft-ultimate-cheat-sheet-set3-3.png',
		// wide_sheet: 'https://progameguides.com/wp-content/uploads/2019/06/tft-desktop-cheat-sheet-set3-2.png',
		// item_sheet_local: require(`../static/img/beta/tft-sheet-item-beta.png`),
		// full_sheet_local: require(`../static/img/beta/tft-sheet-full-beta.png`),
		// wide_sheet_local: require(`../static/img/beta/tft-sheet-wide-beta.png`),
	},
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
		case SET_PATCH_VERSION:
			return {
				...state,
				patch_version : action.patch_version,
				constants : action.constants,
			};
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
// Set patch version
export const setPatchVersion = patch_version => dispatch => {
	const patchConstants = constants.versions[patch_version];
	dispatch({
		type: SET_PATCH_VERSION,
		patch_version,
		constants: patchConstants,
	})
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
