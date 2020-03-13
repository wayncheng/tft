import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {ToggleSwitch, Image} from '..';
import {toggleGoal, setGoal, removeGoal} from '../../modules/goals';

class GoalToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked : false,
		};
	}

	handleGoalToggle = checked => {
		// const {combo_id} = this.props;
		// if (checked === true) {
		// 	this.props.setGoal(combo_id);
		// } else if (checked === false) {
		// 	this.props.removeGoal(combo_id);
		// } else {
			this.props.toggleGoal(this.props.combo_id);
		// }
	};

	render = () => {
		// const {possible_combos} = constants;
		// const {checked} = this.props.goals[]
		// return (
		// 	<section className={classNames('goals items-sec', this.props.className)}>
		// 		{possible_combos.map((combo_id, index) => {
		const {combo_id} = this.props;
		const combo = this.props.itemData[combo_id];
		return (
			<React.Fragment>
				{combo !== undefined && (
					<ToggleSwitch
						aria-label={`Toggle ${combo.name || 'Combo Item'}`}
						label={<Image item_id={combo_id} className="size-3"/>}
						onChange={this.handleGoalToggle}
						// onChange={this.props.toggleGoal}
						// checked={this.state.checked}
						checked={this.props[combo_id]}
						className='goal-toggle m-2'
						container_class={classNames('goal-toggle-container flex p-2 items-center justify-center', this.props.className)}
						id={`toggle-goal--${combo_id}`}
						// checked={this.props[combo_id]}
						// checked={this.props.goals[combo_id]}
						// uncheckedIcon={<FontAwesomeIcon icon='info-circle' className='' />}
						// checkedIcon={<FontAwesomeIcon icon='info-circle' className='' />}
					/>
				)}
			</React.Fragment>
		);
		// 	})}
		// </section>
		// );
	};
}

const mapStateToProps = state => ({
	...state.goals,
	itemData : state.general.itemData,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			toggleGoal,
			setGoal,
			removeGoal,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(GoalToggle);

GoalToggle.defaultProps = {
	combo_id : '',
};


////////////////////////////////////////////////////////////////////////////////////////////
// export const AllGoals = props => {
// 	const {possible_combos} = constants;
// 	return (
// 		<section className={classNames('goals items-sec flex flex-row flex-wrap', props.className)}>
// 			{possible_combos.map((combo_id, index) => {
// 				return (
// 					<div key={index}>
// 						<GoalToggle combo_id={combo_id} />
// 					</div>
// 				);
// 			})}
// 		</section>
// 	);
// };
