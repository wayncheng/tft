import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import {openModal, closeModal, toggleModal} from '../../modules/modal';
import {Modal, CloseBtn, ModalTrigger} from '..';
import constants from '../../utils/constants';

class ItemCheatSheetTrigger extends Component {
	render() {
		return (
			<React.Fragment>
				<ModalTrigger modal_id='item_cheatsheet' modal_action='open' className={classNames('default-trigger btn',this.props.className)}>
					Items
				</ModalTrigger>

				<Modal id='item_cheatsheet' className='photo-modal' rootClass='top-left-modal-root guide-modal-root'>
					<div className='big-img-container'>
						<img className='cheat-sheet' src={constants.item_cheatsheet} alt='item cheat sheet' />
					</div>
					<CloseBtn modal_id='item_cheatsheet' />
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemCheatSheetTrigger);
