import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import {openModal, closeModal, toggleModal} from '../../modules/modal';
import {Modal, CloseBtn, ModalTrigger,AllGoals} from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import constants from '../../utils/constants';

class GoalsModalTrigger extends Component {
	render() {
		return (
			<React.Fragment>
				<ModalTrigger modal_id='goals_modal' modal_action='open' className={classNames('goals-trigger default-trigger btn',this.props.className)}>
					<FontAwesomeIcon icon="bullseye" className=""/>
					<span className="ml-2 hide-on-s">Targets</span>
				</ModalTrigger>

				<Modal id='goals_modal' className='default-modal goals-modal bg-gray-900' rootClass='goals-modal-root'>
					{/* <div className="flex justify-center items-center"> */}
						<AllGoals/>
					{/* </div> */}
					<CloseBtn modal_id='goals_modal' />
				</Modal>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	...state.modal,
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
