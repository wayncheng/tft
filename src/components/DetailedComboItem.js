import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import itemData from '../utils/item_data';
import {
	makeCombo,
	mouseEnterCombo,
	mouseLeaveCombo,
	spotlightCombo,
	clearSpotlight,
	//
} from '../modules/items';
import {
	Image,
	// Emoji,
} from '.';

class DetailedComboItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tooltipActive : false,
		};
	}
	handleClick = event => {
		event.preventDefault();
		const {item1, item2} = this.props;
		this.props.makeCombo(item1, item2);
	};
	handleMouseEnter = event => {
		event.preventDefault();
		const {item1, item2} = this.props;
		this.props.mouseEnterCombo(item1, item2);
	};
	handleMouseLeave = event => {
		event.preventDefault();
		this.props.mouseLeaveCombo();
	};

	// handleClick = event => {
	// 	event.preventDefault();
	// 	// const {item1, item2} = this.props;
	// 	const combo_id = event.target.getAttribute('item_id');
	// 	console.log('combo_id:', combo_id);
	// 	this.props.spotlightCombo(combo_id);
	// };
	// handleMouseEnter = event => {
	// 	event.preventDefault();
	// 	// this.setState({tooltipActive: true})
	// };
	// handleMouseLeave = event => {
	// 	event.preventDefault();
	// 	// this.setState({tooltipActive: false})
	// 	// this.props.clearSpotlight();
	// };

	render() {
		const sorted = [ this.props.item1, this.props.item2 ].sort();
		const item1 = sorted[0];
		const item2 = sorted[1];
		const combo_id = `${item1}_${item2}`;
		const combo = itemData[combo_id];

		return (
			<div className={classNames('detailed-container',{
				// 'is-goal': (this.props.goals[combo_id] === true),
			})}>
				<div className={classNames('detailed-combo',{
					'is-goal': (this.props.goals[combo_id] === true),
				})}>
					<a
						href='#!'
						className={classNames('item sized', 'combo-item', 'flex flex-col', this.props.className)}
						item1={item1}
						item2={item2}
						item_id={combo_id}
						onClick={this.handleClick}
						title={combo.name}
						// onMouseEnter={this.handleMouseEnter}
						// onMouseLeave={this.handleMouseLeave}
					>
						<Image item_id={combo_id} />
					</a>
					<div className='details'>
						<div className='ingredients'>
							<Image className='tiny' item_id={item1} />
							<Image className='tiny' item_id={item2} />
						</div>
						{/* <div className='detail-body'> */}
						{/* <p className='detail-text'>{combo.perk_full}</p> */}
						<p className='detail-text'>{combo.perk}</p>
						{/* </div> */}

						{/* <Emoji item={item1}/>
					<Emoji item={item2}/> */}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	inventory : state.items.inventory,
	goals: state.goals,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			makeCombo,
			mouseEnterCombo,
			mouseLeaveCombo,
			spotlightCombo,
			clearSpotlight,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(DetailedComboItem);

DetailedComboItem.defaultProps = {
	item1 : '',
	item2 : '',
};
