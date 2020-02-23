import {openModal} from './modal';

export const FOCUS_KEY_HANDLER = 'general/FOCUS_KEY_HANDLER';
export const UPDATE_PREFS = 'general/UPDATE_PREFS';
export const WELCOME_PARTY = 'general/WELCOME_PARTY';

const initialState = {
	keyHandlerFocused : false,
	prefs             : {
		showPerks        : false,
		showComboDetails : false,
		showKeybinds     : false,
	},
	isFirstVisit: false,
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
				isFirstVisit: true,
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
		dispatch({ type: WELCOME_PARTY });
		localStorage.setItem('hasVisited','true')
		
		// Open instructions modal 
		dispatch(openModal('instructions'))
	}
};
