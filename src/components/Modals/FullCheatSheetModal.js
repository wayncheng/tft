import React, {Component} from 'react';
import {Modal, CloseBtn} from '..';
import constants from '../../utils/constants';
const {
	// full_sheet_local,
	// item_sheet_local,
	// wide_sheet_local,
	// item_sheet,
	// wide_sheet,
	full_sheet,
} = constants.versions[constants.patch_version];

class FullCheatSheetModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orientation : 'portrait',
			src         : full_sheet,
		};
	}

	componentDidMount = () => {
		const {innerWidth, innerHeight} = window;
		const orientation = innerWidth > innerHeight ? 'landscape' : 'portrait';
		// const src = orientation === 'portrait' ? full_sheet : wide_sheet;
		this.setState({
			orientation,
			// src:orientation === 'portrait' ? full_sheet : wide_sheet,
		});
	};

	render() {
		return (
			<Modal id='full_sheet' className='photo-modal' rootClass=''>
				<div className='big-img-container'>
					<img className='cheat-sheet' src={this.state.src} alt='Full TFT Cheat Sheet' />
				</div>
				<CloseBtn modal_id='full_sheet' />
			</Modal>
		);
	}
}
export default FullCheatSheetModal;
