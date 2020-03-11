export const TOGGLE_MODAL = 'modal/TOGGLE_MODAL';
export const OPEN_MODAL = 'modal/OPEN_MODAL';
export const CLOSE_MODAL = 'modal/CLOSE_MODAL';
export const OPEN_GALLERY = 'modal/OPEN_GALLERY';
export const CLOSE_GALLERY = 'modal/CLOSE_GALLERY';

const initialState = {
	isOpen      : false,
	allModals   : {
		item_sheet : false,
		full_sheet : false,
		wide_sheet : false,
		item_table      : false,
		goals_modal      : false,
	},
	galleryOpen : false,
	photoID     : 'items',
	// galleryID   : 'imgs',
};

//==================================================
export default (state = initialState, action) => {
	let currentModalState = state.allModals[action.modalID];
	// if (currentModalState === undefined){
	// 	console.warn('Unknown modal id provided.')
	// }

	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				allModals : {
					...state.allModals,
					[action.modalID]: true,
				},
			};
		case CLOSE_MODAL:
			return {
				...state,
				allModals : {
					...state.allModals,
					[action.modalID]: false,
				},
			};

		case TOGGLE_MODAL:
			return {
				...state,
				allModals : {
					...state.allModals,
					[action.modalID]: !currentModalState,
				},
			};

		case OPEN_GALLERY:
			return {
				...state,
				galleryOpen : true,
				photoID     : action.photoID || state.photoID,
				// galleryID   : action.galleryID || state.galleryID,
			};
		case CLOSE_GALLERY:
			return {
				...state,
				galleryOpen : false,
				photoID     : 'items',
				// galleryID   : 'imgs',
			};

		default:
			return state;
	}
};

//==================================================
export const openModal = modalID => dispatch => {
	dispatch({
		type    : OPEN_MODAL,
		modalID,
	});
};
export const closeModal = modalID => dispatch =>
	dispatch({
		type    : CLOSE_MODAL,
		modalID,
	});
export const toggleModal = modalID => dispatch =>
	dispatch({
		type    : TOGGLE_MODAL,
		modalID,
	});

export const openGallery = (photoID = '') => dispatch => {
	dispatch({
		type      : OPEN_GALLERY,
		// galleryID,
		photoID,
	});
};
export const closeGallery = () => dispatch => {
	dispatch({
		type      : CLOSE_GALLERY,
		// galleryID,
		// photoID,
	});
};

///////////////////////////////////////////////////////////////////////
