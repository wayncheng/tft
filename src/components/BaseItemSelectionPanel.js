import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
	Item,
	DetailToggle,
	ItemCheatSheetTrigger,
	ModalTrigger,
	Modal,
	CloseBtn,
	// PhotoLightbox,
} from '.';
import constants from '../utils/constants';
import classNames from 'classnames';
// import PhotoLightbox from './Lightbox/PhotoLightbox';
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
					<div className='panel-eyebrow flex flex-row justify-end align-center px-1 py-0'>
						<div className='flex flex-row flex-1 justify-start align-stretch'>
							<ItemCheatSheetTrigger className='eyebrow-item' />
							<ModalTrigger modal_id='full_cheatsheet' modal_action='open' className='default-trigger btn eyebrow-item'>
								Full
								<Modal id='full_cheatsheet' className='photo-modal' rootClass=''>
									<div className='big-img-container'>
										<img className='cheat-sheet' src={constants.full_cheatsheet} alt='Full TFT Cheat Sheet' />
									</div>
									<CloseBtn modal_id='full_cheatsheet' />
								</Modal>
							</ModalTrigger>
							<ModalTrigger modal_id='wide_cheatsheet' modal_action='open' className='default-trigger btn eyebrow-item'>
								Wide
								<Modal id='wide_cheatsheet' className='photo-modal' rootClass=''>
									<div className='big-img-container'>
										<img className='cheat-sheet' src={constants.wide_cheatsheet} alt='Wide TFT Cheat Sheet' />
									</div>
									<CloseBtn modal_id='wide_cheatsheet' />
								</Modal>
							</ModalTrigger>
						</div>

						{/* <PhotoLightbox/> */}
						<DetailToggle className='eyebrow-item' />
					</div>
					{this.props.base.map((baseItem, index) => {
						return <Item className='sel-item' item_id={baseItem} key={'item-' + baseItem} />;
					})}
				</div>
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
