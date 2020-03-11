import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {openModal, closeModal, toggleModal} from '../../modules/modal';
import {Modal, CloseBtn, ModalTrigger, AllBuilds, Image} from '..';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class BuildsModalTrigger extends Component {
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
		for (let build in this.props.builds) {
			const isBuild = this.props.builds[build];
			// console.log('isBuild:',isBuild);
			if (isBuild === true) {
				const parts = build.split('_');
				const itemA = parts[0];
				const itemB = parts[1];
				counts[itemA]++;
				counts[itemB]++;
			}
		}
		const ingredientsList = [];
		for (let item in counts) {
			const quantity = counts[item];
			ingredientsList.push({
				id       : item,
				quantity,
			});
		}

		return (
			<React.Fragment>
				<ModalTrigger
					modal_id='builds_modal'
					modal_action='open'
					className={classNames('builds-trigger default-trigger btn', this.props.className)}
				>
					<span className='ml-2'>Builds</span>
				</ModalTrigger>

				<Modal id='builds_modal' className='default-modal builds-modal bg-gray-900' rootClass='builds-modal-root'>
					<ul className='ingredients-list text-white flex flex-row justify-center'>
						{/* BUILD INVENTORY: COMBOS SELECTED BY USER ==============
									- selected combos are displayed here
									- clicking a combo in build inventory should remove it
							*/}
						{ingredientsList.map((item, index) => {
							return (
								<li key={index} className='px-3 flex flex-row items-center'>
									<Image item_id={item.id} className='tiny' />
									<span className='text-xl ml-1'>{item.quantity}</span>
									{/* {`${item.id}: ${item.quantity}`} */}
								</li>
							);
						})}
					</ul>

					<div
						className={classNames(
							'goals items-sec flex flex-row justify-center items-center flex-wrap py-6',
							props.className,
						)}
					>
						{possible_combos.map((combo_id, index) => {
							return (
								<React.Fragment>
									//////////////////////////////////////////////////// 
									// TODO: BUILD COMBO SELECTORS
									// TODO: click to add combo to build
									////////////////////////////////////////////////////
								</React.Fragment>
							);
						})}
					</div>
					<CloseBtn modal_id='builds_modal' />
				</Modal>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	...state.modal,
	builds : state.items.builds,
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

export default connect(mapStateToProps, mapDispatchToProps)(BuildsModalTrigger);
