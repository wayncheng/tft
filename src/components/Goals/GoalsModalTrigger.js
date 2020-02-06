import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import {openModal, closeModal, toggleModal} from '../../modules/modal';
import {Modal, CloseBtn, ModalTrigger, AllGoals,Image,} from '..';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import constants from '../../utils/constants';

class GoalsModalTrigger extends Component {
	render() {
		const counts = {
			belt    : 0,
			bow     : 0,
			cloak   : 0,
			glove   : 0,
			rod     : 0,
			spatula : 0,
			sword   : 0,
			tear    : 0,
			vest    : 0,
		};
		for (let goal in this.props.goals) {
			const isGoal = this.props.goals[goal];
			// console.log('isGoal:',isGoal);
			if (isGoal === true) {
				const parts = goal.split('_');
				const itemA = parts[0];
				const itemB = parts[1];
				counts[itemA]++;
				counts[itemB]++;
				// counts[itemA] = counts[itemA] + 1 || 1;
				// counts[itemB] = counts[itemB] + 1 || 1;
			}
		}
		// console.log('counts:', counts);
		const ingredientsList = [];
		for (let item in counts) {
			const quantity = counts[item];
			ingredientsList.push({
				id:item,
				quantity,
			});
		}
		// console.log('ingredientsList:', ingredientsList);
		return (
			<React.Fragment>
				<ModalTrigger
					modal_id='goals_modal'
					modal_action='open'
					className={classNames('goals-trigger default-trigger btn', this.props.className)}
				>
					<FontAwesomeIcon icon='bullseye' className='' />
					<span className='ml-2 hide-on-s'>Targets</span>
				</ModalTrigger>

				<Modal id='goals_modal' className='default-modal goals-modal bg-gray-900' rootClass='goals-modal-root'>
					<ul className='ingredients-list text-white flex flex-row justify-center'>
						{ingredientsList.map((item, index) => {
							return(
								<li key={index} className="px-3 flex flex-row items-center">
									<Image item_id={item.id} className='tiny'/>
									<span className="text-xl ml-1">{item.quantity}</span>
									{/* {`${item.id}: ${item.quantity}`} */}
								</li>
							)
						})}
					</ul>
					{/* <div className="flex justify-center items-center"> */}
					<AllGoals />
					{/* </div> */}
					<CloseBtn modal_id='goals_modal' />
				</Modal>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	...state.modal,
	goals : state.goals,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			openModal,
			closeModal,
			toggleModal,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(GoalsModalTrigger);
