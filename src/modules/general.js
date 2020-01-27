
export const FOCUS_KEY_HANDLER   = 'general/FOCUS_KEY_HANDLER';

const initialState = {
	keyHandlerFocused: false,
};

export default (state = initialState, action) => {
	switch (action.type) {

		case FOCUS_KEY_HANDLER:
			return {
				...state,
				keyHandlerFocused: true,
			}

		default:
			return state
	}
}

// LAYER CONTROLS ========================================
export const focusKeyHandler = () => dispatch => {
	document.getElementById('item-page-root').focus();
	dispatch({ type: FOCUS_KEY_HANDLER })
}
