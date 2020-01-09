// import undoable, { distinctState } from 'redux-undo'

export const SET_INVENTORY = 'items/SET_INVENTORY';
export const SET_COMBO_INVENTORY = 'items/SET_COMBO_INVENTORY';
export const SET_COMBOS = 'items/SET_COMBOS';
export const SET_UNIQUE = 'items/SET_UNIQUE';
export const TOGGLE_PERKS = 'items/TOGGLE_PERKS';
export const MOUSE_ENTER_COMBO = 'items/MOUSE_ENTER_COMBO';
export const MOUSE_LEAVE_COMBO = 'items/MOUSE_LEAVE_COMBO';
export const SPOTLIGHT_COMBO = 'items/SPOTLIGHT_COMBO';
export const CLEAR_SPOTLIGHT = 'items/CLEAR_SPOTLIGHT';

const initialState = {
	// base      : [ 'sword', 'vest', 'belt', 'rod', 'cloak', 'bow', 'spatula', 'tear', 'glove' ],
	base           : [ 'belt', 'bow', 'cloak', 'glove', 'rod', 'spatula', 'sword', 'tear', 'vest' ],
	comboInventory : [],
	inventory      : [],
	combos         : [],
	unique         : [],
	showPerks      : false,
	ingredients    : [ -1, -1 ],
	hoveringCombo  : false,
	comboSpotlight: '',
	// comboSpotlight : 'sword_vest',
	// inventory : ['sword','vest'],
	// combos    : ['sword_vest'],
	// unique    : ['sword_vest'],
	// inventory           : [ 'belt', 'bow', 'cloak', 'glove', 'rod', 'spatula', 'sword', 'tear', 'vest', 'belt', 'bow', 'cloak', 'glove', 'rod', 'spatula', 'sword', 'tear', 'vest' ],
};

const items = (state = initialState, action) => {
	switch (action.type) {
		case SET_INVENTORY:
			return {
				...state,
				inventory : action.inventory,
			};
		case SET_COMBOS:
			return {
				...state,
				combos : action.combos,
			};
		case SET_COMBO_INVENTORY:
			return {
				...state,
				comboInventory : state.comboInventory.concat([ action.combo ]),
			};
		case SET_UNIQUE:
			return {
				...state,
				unique : action.unique,
			};
		case TOGGLE_PERKS:
			return {
				...state,
				showPerks : !state.showPerks,
			};

		case SPOTLIGHT_COMBO:
			return {
				...state,
				comboSpotlight : action.combo_id,
			};
		case CLEAR_SPOTLIGHT:
			return {
				...state,
				comboSpotlight : '',
			};

		case MOUSE_ENTER_COMBO:
			return {
				...state,
				hoveringCombo : true,
				ingredients   : action.ingredients,
				// ingredient1 : action.ingredient1,
				// ingredient2 : action.ingredient2,
			};
		case MOUSE_LEAVE_COMBO:
			return {
				...state,
				hoveringCombo : false,
				ingredients   : [ -1, -1 ],
				// ingredient1 : -1,
				// ingredient2 : -1,
			};
		default:
			return state;
	}
};

export default items;
// Use undo, redo ...................
// const undoableItems = undoable(items, {
//   // filter: distinctState()
// })
// export default undoableItems;

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// LAYER CONTROLS ========================================
export const findCombos = inventory => (dispatch, getState) => {
	// const {inventory} = getState().items;
	const combos = [];
	const unique = {};
	const hash = {};

	for (let i = 0; i < inventory.length; i++) {
		const item = inventory[i];
		for (let j = 0; j < inventory.length; j++) {
			if (i !== j) {
				const partner = inventory[j];
				const pair = [ item, partner ].sort();

				// Unique unique
				unique[pair.join('_')] = 1;

				// Combos
				const combo = `${i}${j}`;
				const opposite = `${j}${i}`;
				if (hash[opposite] === undefined) {
					combos.push(pair);
					hash[combo] = 1;
				}
			}
		}
	}

	console.log('combos:', combos);
	dispatch({
		type   : SET_COMBOS,
		combos,
	});
	dispatch({
		type   : SET_UNIQUE,
		unique : Object.keys(unique),
	});
};

export const processKey = key => (dispatch, getState) => {
	console.log('key:', key);
	const {base} = getState().items;

	const num = parseInt(key[key.length - 1]);
	const action = key.startsWith('shift+') ? 'remove' : 'add';
	const item = base[num - 1];

	if (action === 'add') {
		dispatch(addItem(item));
	} else if (action === 'remove') {
		dispatch(removeItem(item));
	}
};

export const addItem = item => (dispatch, getState) => {
	const {inventory} = getState().items;
	const newInventory = inventory.concat([ item ]).sort();
	dispatch(setInventory(newInventory));
};
export const removeItem = _item => (dispatch, getState) => {
	// const parts = _item.split('_');
	// for (let i = 0; i < parts.length; i++) {
	// const item = parts[i];
	let {inventory} = getState().items;
	let newInv = inventory;

	const pos = newInv.indexOf(_item);
	if (pos !== -1) {
		newInv = newInv.slice(0, pos).concat(newInv.slice(pos + 1));
		dispatch(setInventory(newInv));
	}
	// }
};
export const makeCombo = (item1, item2) => dispatch => {
	console.log('combining:', item1, item2);

	// remove each item from inventory
	dispatch(removeItem(item1));
	dispatch(removeItem(item2));

	// add combined to inventory?
	dispatch({
		type  : SET_COMBO_INVENTORY,
		combo : `${item1}_${item2}`,
	});
};
export const setInventory = inventory => dispatch => {
	dispatch({
		type      : SET_INVENTORY,
		inventory,
	});

	dispatch(findCombos(inventory));
};
export const togglePerks = () => dispatch => {
	dispatch({type: TOGGLE_PERKS});
};

export const spotlightCombo = combo_id => dispatch => {
	dispatch({
		type     : SPOTLIGHT_COMBO,
		combo_id,
	});
};
export const clearSpotlight = () => dispatch => {
	dispatch({type: CLEAR_SPOTLIGHT});
};

export const mouseEnterCombo = (item1, item2) => (dispatch, getState) => {
	// Find where the ingredients (base items) are located in the inventory
	const {inventory} = getState().items;
	let pos1 = inventory.indexOf(item1);
	let pos2 = inventory.indexOf(item2);
	// console.log(`${pos1} + ${pos2}`)
	if (pos2 === pos1) {
		// pos2 = inventory.lastIndexOf(item2)
		pos2 = pos1 + 1;
	}

	// Toggle hover state flag, Set ingredients location
	dispatch({
		type        : MOUSE_ENTER_COMBO,
		// hoveringCombo: true,
		ingredients : [ pos1, pos2 ],
		// ingredient1: pos1,
		// ingredient2: pos2,
	});
};
export const mouseLeaveCombo = () => dispatch => {
	// Reset ingredients, remove hover flag
	dispatch({
		type : MOUSE_LEAVE_COMBO,
	});
};
