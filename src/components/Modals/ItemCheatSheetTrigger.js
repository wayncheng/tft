import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {openModal, closeModal, toggleModal} from '../../modules/modal';
import {Modal, CloseBtn, ModalTrigger} from '..';

class ItemCheatSheetTrigger extends Component {
	render() {
		return (
			<React.Fragment>
				<ModalTrigger modal_id='item_sheet' modal_action='open' className={classNames('default-trigger btn outline-btn',this.props.className)}>
					Items
				</ModalTrigger>

				<Modal id='item_sheet' className='photo-modal' rootClass='top-left-modal-root guide-modal-root'>
					<div className='big-img-container'>
						<img className='cheat-sheet' src={this.props.constants.item_sheet} alt='item cheat sheet' />
					</div>
					<CloseBtn modal_id='item_sheet' />
				</Modal>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => ({
	...state.modal,
	constants: state.general.constants,
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemCheatSheetTrigger);
