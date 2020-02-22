import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { openModal, closeModal } from '../../modules/modal'
import Modal from 'react-modal'
import './Modal.scss'


class GeneralModal extends Component {
	constructor(props){
		super(props)
		this.state = {
			isOpen: false, // closed by default
			hasScrollbar: false, // if the window you're opening the modal from has a scroll bar
		}
	}

componentDidMount = () => {
	if (this.props.initialOpen === true){
		console.log('this.props.id:',this.props.id);
		this.props.openModal(this.props.id)
	}
}

componentDidUpdate = prevProps => {
	let {id} = this.props;

	if (prevProps.allModals[id] !== this.props.allModals[id]){
		const openState = this.props.allModals[id];
		let newState = {
			isOpen: openState,
		}

		// Before closing modal .....
		// - Manually request to close modal when isOpen goes from true to false.
		// - fixes bug where the window closes but overlay remains
		if (openState === false) {
			this.removeOverlayEffects()
		} 
		// Before opening modal .....
		else {
			newState.hasScrollbar = this.hasScrollbar()
		}
		
		this.setState(newState)
	}
};

afterOpenModal = () => {
	// console.log('this.overlayRef:',this.overlayRef)
	// console.log('this.contentRef:',this.contentRef)
	
	// * Listen for ESC key -----------------
	// ? Possibly deprecated. Using react-modal props instead.
	document.addEventListener('keyup', event => {
		// event.preventDefault();
		let code = event.charCode || event.keyCode;

		// Escape Key charCode is 27
		if (code === 27) {
			this.closeModal()
		}
	})

	// ! Most likely deprecated. Using react-modal props instead.
	// * Set Focus on Modal Window --------------
	//   - Prevents unwanted interactions with the modal's trigger
	//     For example, by default, after you click on a button to 
	//     open the modal then press space, it will essentially 
	//     click the button again since it is still focused (which 
	//     makes the window close, but the modal overlay remains).
	//     Rather than fighting those side effects, focusing on
	//     the modal window should effectively prevent possible errors
	// const modalWindowEl = this.contentRef;
	// console.log('modalWindowEl:',modalWindowEl)
	// modalWindowEl.focus()	
	
};

closeModal = () => {
	// this.removeOverlayEffects() // Remove blur to our main app
	// Send new state to redux which will sent back and applied here via cWRP
	this.props.closeModal(this.props.id)

	// const $modal = document.getElementById('modal--'+this.props.modal_id);
	// // $modal.blur();
};

// Overlay Effect ==================================
// ? instead of manually toggling class on #root, class is toggled on <html> and overlay effects are applied using good old-fashioned CSS.
// ? ... BUT, this removes the ability to apply different styling to #root for different modals. However, custom #root styling per modal was never implemented in the first place. This is mostly a warning to future me if I decide to add this feature
// ! maybe deprecated
//--------------------------------------------------
	addOverlayEffects = () => { document.querySelector(this.props.rootSelector).classList.add("blur-for-modal"); }
	removeOverlayEffects = () => { document.querySelector(this.props.rootSelector).classList.remove("blur-for-modal"); }
	selectParent = () => {
		// document.getElementById('outer-space')
		// return document.getElementById(this.props.parentID)
		return document.querySelector(this.props.parent)
	}


	hasScrollbar = () => {
		// source: https://tylercipriani.com/blog/2014/07/12/crossbrowser-javascript-scrollbar-detection/

		// The Modern solution
		if (typeof window.innerWidth === 'number'){
			return window.innerWidth > document.documentElement.clientWidth;
		}
		let rootElem = document.documentElement || document.body; // rootElem for quirksmode

		// Check overflow style property on body for fauxscrollbars
		let overflowStyle;
		if (typeof rootElem.currentStyle !== 'undefined'){
			overflowStyle = rootElem.currentStyle.overflow;
		}
		overflowStyle = overflowStyle || window.getComputedStyle(rootElem, '').overflow;

		// Also need to check the Y axis overflow
		let overflowYStyle; 
		if (typeof rootElem.currentStyle !== 'undefined'){
			overflowYStyle = rootElem.currentStyle.overflowY;
		}
		overflowYStyle = overflowYStyle || window.getComputedStyle(rootElem, '').overflowY;
		let contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
		let overflowShown    = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
		let alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

		return (contentOverflows && overflowShown) || (alwaysShowScroll);
	}



// RENDER ==================================================
	render(){
		return(
			<Modal
				{...this.props}
				isOpen={this.state.isOpen}
				contentLabel={this.props.contentLabel}
				modal_id={this.props.id}
				id={`modal--${this.props.id}`}
				parentSelector={this.selectParent}

				// Class Names ------------------
				className={{
					base: classNames("modal",this.props.className),
					afterOpen: "modal_after-open",
					beforeClose: "modal_before-close"
				}}
				overlayClassName={{
					base: classNames("modal-overlay",this.props.overlayClass),
					afterOpen: "modal-overlay_after-open",
					beforeClose: "modal-overlay_before-close"
				}}
				portalClassName={classNames(
					'modal-root',
					this.props.rootClass,
					{'overflowing': this.state.hasScrollbar}
				)}
				htmlOpenClassName='modal_is-open'
				// htmlOpenClassName={classNames('modal_is-open',this.props.htmlOpenClass)}

				// Handlers -----------------------
				onAfterOpen={this.afterOpenModal}
				onRequestClose={this.closeModal}

				// Available Refs -----------------
				overlayRef={node => this.overlayRef = node}
				contentRef={node => this.contentRef = node}

				// Behavior Options
				shouldCloseOnEsc={false} // if ESC key closes modal
				shouldFocusAfterRender={true} // if the modal should be focused after render
				shouldCloseOnOverlayClick={true} // if the overlay should close the modal
				shouldReturnFocusAfterClose={true} // if the modal should restore focus to the element that had focus prior to its display.
			>

				{this.props.children}

			</Modal>
		)
	}
}


////////////////////////////////////////////////////
GeneralModal.defaultProps = {
	isOpen: false,
	rootSelector: '#root',
	rootClass: '',
	overlayClass: '',
	// parentID: 'outer-space',
	parent: '#outer-space',
	
}
GeneralModal.propTypes = {
	id: PropTypes.string.isRequired,
}

// Set Modal root
Modal.setAppElement("#root");


// Redux ==================================================
const mapStateToProps = state => ({
	allModals: state.modal.allModals,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	openModal,
	closeModal,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(GeneralModal)
