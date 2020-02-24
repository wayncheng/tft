import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {openModal, closeModal, toggleModal} from '../../modules/modal';
import {
	// Modal, 
	// CloseBtn, 
	// Instructions, 
	ModalTrigger, 
	InstructionsModal,
} from '..';
// import constants from '../../utils/constants';

class InstructionsModalTrigger extends Component {
	render() {
		return (
			<React.Fragment>
				<ModalTrigger
					modal_id='instructions'
					modal_action='open'
					className={classNames('help-btn default-trigger icon', this.props.className)}
				>
					{/* <FontAwesomeIcon icon={[ 'far', 'question-circle' ]} className={classNames('help-icon')} /> */}
					<FontAwesomeIcon icon='question-circle' className={classNames('help-icon')} />
					{/* <span className='ml-2 hide-on-s'>Help</span> */}
				</ModalTrigger>

				{/* <Modal id='instructions' className='instructions-modal default-modal p-8 px-12' rootClass='top-left-modal-root guide-modal-root'>
					<Instructions />
					<CloseBtn modal_id='instructions' />
				</Modal> */}

				<InstructionsModal/>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	// ...state.modal,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			// openModal,
			// closeModal,
			// toggleModal,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsModalTrigger);
