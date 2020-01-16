import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import itemData from '../utils/item_data';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ToggleSwitch, Image} from '../components';
// import {toggleComboDetails} from '../modules/items';
import {toggleGoal} from '../modules/goals';
// import './Goals.scss';
import constants from '../utils/constants';
import itemData from '../utils/item_data';

class GoalToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked : false,
		};
	}

	// getPosibilities = () => {
	// 	const {base} = this.props;
	// 	const hash = {};
	// 	for (let i = 0; i < base.length; i++) {
	// 		const x = base[i];
	// 		for (let j = 0; j < base.length; j++) {
	// 			const y = base[j];
	// 			const combo = [ x, y ].sort().join('_');
	// 			hash[combo] = 1;
	// 		}
	// 	}
	// 	return Object.keys(hash);
	// };

	componentDidUpdate = prevProps => {
		let {combo_id} = this.props;

		if (prevProps[combo_id] !== this.props[combo_id]) {
			// const checkState = this.props[combo_id];
			this.setState({
				checked : this.props[combo_id],
			});
		}
	};

	handleGoalToggle = () => {
		this.props.toggleGoal(this.props.combo_id);
	};

	render() {
		// const {possible_combos} = constants;
		// const {checked} = this.props.goals[]
		// return (
		// 	<section className={classNames('goals items-sec', this.props.className)}>
		// 		{possible_combos.map((combo_id, index) => {
		const {combo_id} = this.props;
		const combo = itemData[combo_id];
		return (
			<React.Fragment>
				{(combo !== undefined) && (
					<ToggleSwitch
						aria-label={`Toggle ${combo.name || 'Combo Item'}`}
						label={<Image item_id={combo_id} />}
						onChange={this.handleGoalToggle}
						checked={this.state.checked}
						className='goal-toggle'
						container_class={classNames('goal-toggle-container', this.props.className)}
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
	}
}

const mapStateToProps = state => ({
	...state.goals,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			toggleGoal,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(GoalToggle);

GoalToggle.defaultProps = {
	combo_id : '',
};

export class AllGoals extends Component {
	render() {
		const {possible_combos} = constants;
		return (
			<section className={classNames('goals items-sec', this.props.className)}>
				{possible_combos.map((combo_id, index) => {
					return (
						<div key={index}>
							<GoalToggle combo_id={combo_id} />
						</div>
					);
				})}
			</section>
		);
	}
}
