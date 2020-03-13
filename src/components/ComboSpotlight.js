import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {
	Image,
	// asdfasdf,
} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {spotlightCombo, clearSpotlight} from '../modules/items';

class ComboSpotlight extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleOverlayClick = event => {
		event.preventDefault();
		this.props.clearSpotlight();
	}

	render() {
		const _spotlight = this.props.comboSpotlight;
		const combo = this.props.itemData[_spotlight];
		const ingredients = _spotlight.split('_');
		const item1 = ingredients[0];
		const item2 = ingredients[1];

		return (
			<div className={classNames('spotlight-overlay', {hidden: _spotlight === ''})} onClick={this.handleOverlayClick}>
				<div
					className={classNames('spotlight', this.props.className, {
						hidden : _spotlight === '',
					})}
				>
					{_spotlight.length > 0 && (
						<div className='spotlight-body'>
							<div className='formula sizer flex flex-row items-center justify-center mb-4'>
								<Image item_id={item1} className='ingredient-icon' />
								<Image item_id={item2} className='ingredient-icon' />
								<FontAwesomeIcon icon='long-arrow-alt-right' className='operator' />
								<Image item_id={_spotlight} className='combo-icon' />
							</div>
							<p>{combo.perk_full}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	comboSpotlight : state.items.comboSpotlight,
	itemData : state.general.itemData,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			spotlightCombo,
			clearSpotlight,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(ComboSpotlight);

// ComboSpotlight.defaultProps = {};
