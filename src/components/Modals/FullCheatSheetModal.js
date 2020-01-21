import React, {Component} from 'react';
import {Modal, CloseBtn} from '..';
import constants from '../../utils/constants';

class FullCheatSheetModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			orientation : 'portrait',
		};
	}

	componentDidMount = () => {
		const {innerWidth, innerHeight} = window;
		this.setState({
			orientation: (innerWidth > innerHeight) ? 'landscape' : 'portrait'
		});
	};

	render() {
		return (
			<Modal id='full_cheatsheet' className='photo-modal' rootClass=''>
				<div className='big-img-container'>
					<img className='cheat-sheet' src={this.state.orientation === 'landscape' ? constants.wide_cheatsheet : constants.full_cheatsheet} alt='Full TFT Cheat Sheet' />
				</div>
				<CloseBtn modal_id='full_cheatsheet' />
			</Modal>
		);
	}
}
export default FullCheatSheetModal;
