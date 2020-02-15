import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import itemData from '../utils/item_data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import './DetailToggle.scss';
import {ToggleSwitch} from '../components';
import {toggleComboDetails} from '../modules/items';
import {setPrefs} from '../modules/general';

class DetailToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleDetailToggle = () => {
		// event.preventDefault();
		// this.props.toggleComboDetails();
		this.props.setPrefs({showComboDetails: !this.props.showComboDetails})
	};

	render() {
		return (
			<ToggleSwitch
				aria-label='Toggle Details'
				label={<FontAwesomeIcon icon='info-circle' className='' />}
				// label="Details"
				// uncheckedIcon={<FontAwesomeIcon icon='info-circle' className='' />}
				// checkedIcon={<FontAwesomeIcon icon='info-circle' className='' />}
				// uncheckedIcon={<FontAwesomeIcon icon='info' className='' />}
				// checkedIcon={<FontAwesomeIcon icon='info' className='' />}
				onChange={this.handleDetailToggle}
				checked={this.props.showComboDetails}
				className='detail-toggle-switch'
				container_class={classNames('detail-toggle',this.props.className)}
				id='detail-toggle'
			/>
		);
	}
}

const mapStateToProps = state => ({
	// ...state.items,
	// showComboDetails : state.items.showComboDetails,
	showComboDetails : state.general.prefs.showComboDetails,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			toggleComboDetails,
			setPrefs,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(DetailToggle);

// DetailToggle.defaultProps = {};

// <a href='#!' onClick={this.handleDetailToggle} className="detail-toggle">
// 		<FontAwesomeIcon icon='info-circle' className="mx-2" />
// 		DetailToggle
// </a>
// <h3 className='sec-title icon-title text-2xl'> <FontAwesomeIcon icon='dice-six' /> </h3>
