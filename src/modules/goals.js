export const TOGGLE_GOAL = 'goals/TOGGLE_GOAL';
export const SET_GOAL = 'goals/SET_GOAL';
export const REMOVE_GOAL = 'goals/REMOVE_GOAL';
export const UPDATE_GOALS_STATE = 'goals/UPDATE_GOALS_STATE';

const initialState = {
	belt_belt       : false,
	belt_bow        : false,
	belt_cloak      : false,
	belt_glove      : false,
	belt_rod        : false,
	belt_spatula    : false,
	belt_sword      : false,
	belt_tear       : false,
	belt_vest       : false,
	bow_bow         : false,
	bow_cloak       : false,
	bow_glove       : false,
	bow_rod         : false,
	bow_spatula     : false,
	bow_sword       : false,
	bow_tear        : false,
	bow_vest        : false,
	cloak_cloak     : false,
	cloak_glove     : false,
	cloak_rod       : false,
	cloak_spatula   : false,
	cloak_sword     : false,
	cloak_tear      : false,
	cloak_vest      : false,
	glove_glove     : false,
	glove_rod       : false,
	glove_spatula   : false,
	glove_sword     : false,
	glove_tear      : false,
	glove_vest      : false,
	rod_rod         : false,
	rod_spatula     : false,
	rod_sword       : false,
	rod_tear        : false,
	rod_vest        : false,
	spatula_spatula : false,
	spatula_sword   : false,
	spatula_tear    : false,
	spatula_vest    : false,
	sword_sword     : false,
	sword_tear      : false,
	sword_vest      : false,
	tear_tear       : false,
	tear_vest       : false,
	vest_vest       : false,

	// belt_rod        : true, // morello
	// bow_rod         : true, // rageblade
	// bow_sword       : true, // giantslayer
	// cloak_tear      : true, // hush
	// cloak_spatula   : true, // light
	// sword_vest      : true, // guardian angel
	// sword_tear      : true, // spear of shojin
	// tear_tear       : true, // seraphs embrace
};

//==================================================
export default (state = initialState, action) => {
	let currentGoalState = state[action.combo_id];

	switch (action.type) {
		case SET_GOAL:
			return {
				...state,
				[action.combo_id]: true,
			};
		case REMOVE_GOAL:
			return {
				...state,
				[action.combo_id]: false,
			};

		case TOGGLE_GOAL:
			return {
				...state,
				[action.combo_id]: !currentGoalState,
				// allGoals : {
				// 	...state.allGoals,
				// },
			};
		case UPDATE_GOALS_STATE:
			return {
				...state,
				...action.goalsState,
			};

		default:
			return state;
	}
};

//==================================================
export const setGoal = combo_id => dispatch => {
	dispatch({
		type     : SET_GOAL,
		combo_id,
	});
};
export const removeGoal = combo_id => dispatch =>
	dispatch({
		type     : REMOVE_GOAL,
		combo_id,
	});
export const toggleGoal = combo_id => dispatch => {
	dispatch({
		type     : TOGGLE_GOAL,
		combo_id,
	});

	dispatch(saveGoalsLocally());
};
export const saveGoalsLocally = () => (dispatch, getState) => {
	const goalsState = getState().goals;

	localStorage.setItem('goals', JSON.stringify(goalsState));
};
export const setGoalsFromLocal = () => (dispatch, getState) => {
	const goalsStr = localStorage.getItem('goals');
	if (goalsStr !== undefined) {
		const localGoals = JSON.parse(goalsStr);
		dispatch(updateGoalsState(localGoals));
	}
};

export const updateGoalsState = goalsState => dispatch => {
	dispatch({
		type       : UPDATE_GOALS_STATE,
		goalsState,
	});
};
///////////////////////////////////////////////////////////////////////
