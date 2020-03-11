import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
	Item,
	DetailToggle,
	LightboxBtn,
	GoalsModalTrigger,
	InstructionsModalTrigger,
	// ItemCheatSheetTrigger,
	// ModalTrigger,
	// Modal,
	// CloseBtn,
	// ResetBtn,
	// FullCheatSheetModal,
} from '.';
import classNames from 'classnames';

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
							{/* <DetailToggle className='eyebrow-item p-0' /> */}
						</div>

						<div className='panel-eyebrow perma-left'>
							<InstructionsModalTrigger className="eyebrow-item"/>
						</div>
						<div className='panel-eyebrow perma-right'>
							<DetailToggle className='eyebrow-item p-0' />
						</div>

						<div className='panel-eyebrow sideburns right-eyebrow'>
							{/* <InstructionsModalTrigger className="eyebrow-item"/> */}
							<LightboxBtn className="right-sideburn"/>
						</div>

					{/* Item Selectors ================================================== */}
					{this.props.base.map((baseItem, index) => {
						return <Item className='sel-item' item_id={baseItem} key={'item-' + baseItem} keybind={index+1} />;
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

