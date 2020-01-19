import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {GoalToggle} from '..';
// import constants from '../../utils/constants';

const AllGoals = props => {
	// const {possible_combos} = constants;
	const possible_combos = Object.keys(props.goals)
	return (
		<section
			className={classNames(
				'goals items-sec flex flex-row justify-center items-center flex-wrap py-6',
				props.className,
			)}
		>
			{possible_combos.map((combo_id, index) => {
				return (
					// <div key={index}>
					<GoalToggle combo_id={combo_id} key={index} />
					// </div>
				);
			})}

			{/* Blanks for Alignment (needs 5 at most)================== */}
			{/* <div className="goal-toggle-container p-2"></div>
			<div className="goal-toggle-container p-2"></div>
			<div className="goal-toggle-container p-2"></div>
			<div className="goal-toggle-container p-2"></div>
			<div className="goal-toggle-container p-2"></div> */}
		</section>
	);
};

const mapStateToProps = state => ({
	goals : state.goals,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AllGoals);
