import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
	Item,
	DetailToggle,
	// ItemCheatSheetTrigger,
	ModalTrigger,
	// Modal,
	// CloseBtn,
	LightboxBtn,
	GoalsModalTrigger,
	// ResetBtn,
	FullCheatSheetModal,
} from '.';
// import constants from '../utils/constants';
import classNames from 'classnames';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class BaseItemSelectionPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<aside className='select-panel-container'>
				<div className={classNames('select-panel items-sec', this.props.className)}>
					{/* Eyebrow ========================================================== */}
						<div className='panel-eyebrow sideburns left-eyebrow'>
							<GoalsModalTrigger className='eyebrow-item' />
							<DetailToggle className='eyebrow-item p-0' />
						</div>
						<div className='panel-eyebrow sideburns right-eyebrow'>
							<LightboxBtn/>
						</div>
					{/* <div className='panel-eyebrow-container sideburns flex flex-row justify-end align-center px-1 py-0 mb-2'> */}
						{/* <div className='panel-eyebrow flex flex-row flex-1 justify-start items-center'>
							<PhotoLightbox/>
						</div> */}
						{/* <div className='panel-eyebrow flex flex-row justify-end items-center'>
							<GoalsModalTrigger className='eyebrow-item' />
							<DetailToggle className='eyebrow-item' />
						</div> */}
					{/* </div> */}

					{/* Item Selectors ================================================== */}
					{this.props.base.map((baseItem, index) => {
						return <Item className='sel-item' item_id={baseItem} key={'item-' + baseItem} />;
					})}
				</div>

				{/* Modals ================================================================ */}
				{/* <Modal id='full_cheatsheet' className='photo-modal' rootClass=''>
					<div className='big-img-container'>
						<img className='cheat-sheet' src={constants.full_cheatsheet} alt='Full TFT Cheat Sheet' />
					</div>
					<CloseBtn modal_id='full_cheatsheet' />
				</Modal> */}
				{/* <Modal id='wide_cheatsheet' className='photo-modal' rootClass=''>
					<div className='big-img-container'>
						<img className='cheat-sheet' src={constants.wide_cheatsheet} alt='Wide TFT Cheat Sheet' />
					</div>
					<CloseBtn modal_id='wide_cheatsheet' />
				</Modal> */}
			</aside>
		);
	}
}

const mapStateToProps = state => ({
	base : state.items.base,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BaseItemSelectionPanel);

// BaseItemSelectionPanel.defaultProps = {};
