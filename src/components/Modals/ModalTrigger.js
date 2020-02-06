import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {openModal, closeModal, toggleModal} from '../../modules/modal';
// import {Modal,CloseBtn} from '..';
// import constants from '../../utils/constants';

class ModalTrigger extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = event => {
		event.stopPropagation();
		event.preventDefault();
		let {modal_id, modal_action} = this.props;

		if (modal_action === 'close') {
			this.props.beforeClose();
			this.props.closeModal(modal_id);
			this.props.afterClose();
		} else if (modal_action === 'open') {
			this.props.beforeOpen();
			this.props.openModal(modal_id);
			this.props.afterOpen();
		} else {
			this.props.toggleModal(modal_id);
		}

	};

	render() {
		if (this.props.element === 'link') {
			return (
				<a
					href='#!'
					title={this.props.title}
					className={classNames('modal-trigger', this.props.className)}
					onClick={this.handleClick}
					id={this.props.id}
					style={this.props.style}
					modal_id={this.props.modal_id}
					modal_action={this.props.modal_action || 'open'}
				>
					{this.props.children}
				</a>
			);
		} else {
			return (
				<button
					type='button'
					title={this.props.title}
					className={classNames('modal-trigger', this.props.className)}
					onClick={this.handleClick}
					id={this.props.id}
					style={this.props.style}
					modal_id={this.props.modal_id}
					modal_action={this.props.modal_action || 'open'}
				>
					{this.props.children}
				</button>
			);
		}
	}
}

const mapStateToProps = state => ({
	// ...state.general,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalTrigger);

ModalTrigger.defaultProps = {
	modal_action : 'open',
	beforeOpen   : () => {},
	afterOpen    : () => {},
	beforeClose  : () => {},
	afterClose   : () => {},
};

ModalTrigger.propTypes = {
	beforeOpen  : PropTypes.func,
	afterOpen   : PropTypes.func,
	beforeClose : PropTypes.func,
	afterClose  : PropTypes.func,
};
