import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {GoalToggle} from '..';

const AllGoals = props => {
	// sort alphabetically to prevent weird grouping of goals
	const possible_combos = Object.keys(props.goals).sort(); 
	return (
		<section
			className={classNames(
				'goals items-sec flex flex-row justify-center items-center flex-wrap py-6',
				props.className,
			)}
		>
			{possible_combos.map((combo_id, index) => {
				return (
					<GoalToggle combo_id={combo_id} key={index} />
				);
			})}
		</section>
	);
};

const mapStateToProps = state => ({
	goals : state.goals,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AllGoals);
