import React from 'react';
import classNames from 'classnames';
import {GoalToggle} from '..';
import constants from '../../utils/constants';


const AllGoals = props => {
	const {possible_combos} = constants;
	return (
		<section className={classNames('goals items-sec flex flex-row justify-center items-center flex-wrap py-6', props.className)}>
			{possible_combos.map((combo_id, index) => {
				return (
						<GoalToggle combo_id={combo_id}  key={index}/>
					// <div key={index}>
					// </div>
				);
			})}
		</section>
	);
};
export default AllGoals;