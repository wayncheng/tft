import React, {Component} from 'react';
import {Modal, CloseBtn} from '..';
import constants from '../../utils/constants';

class FullCheatSheetModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orientation : 'portrait',
			src         : constants.full_cheatsheet,
		};
	}

	componentDidMount = () => {
		const {innerWidth, innerHeight} = window;
		const orientation = innerWidth > innerHeight ? 'landscape' : 'portrait';
		// const src = orientation === 'portrait' ? constants.full_cheatsheet : constants.wide_cheatsheet;
		this.setState({
			orientation,
			// src:orientation === 'portrait' ? constants.full_cheatsheet : constants.wide_cheatsheet,
		});
	};

	render() {
		return (
			<Modal id='full_cheatsheet' className='photo-modal' rootClass=''>
				<div className='big-img-container'>
					<img className='cheat-sheet' src={this.state.src} alt='Full TFT Cheat Sheet' />
				</div>
				<CloseBtn modal_id='full_cheatsheet' />
			</Modal>
		);
	}
}
export default FullCheatSheetModal;
