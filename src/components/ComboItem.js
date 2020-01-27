import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import itemData from '../utils/item_data';
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

class ComboItem extends Component {
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
		// this.setState({tooltipActive: true})
	};
	handleMouseLeave = event => {
		event.preventDefault();
		// this.setState({tooltipActive: false})
		// this.props.clearSpotlight();
	};

	render() {
		const sorted = [ this.props.item1, this.props.item2 ].sort();
		const item1 = sorted[0];
		const item2 = sorted[1];
		const combo_id = `${item1}_${item2}`;
		// const combo = itemData[combo_id];
		const isGoal = this.props.goals[combo_id] === true;

		return (
			<a
				href='#!'
				className={classNames('item', 'combo-item', 'p-2 flex flex-col', this.props.className, {'is-goal': isGoal})}
				item1={item1}
				item2={item2}
				item_id={combo_id}
				onClick={this.handleClick}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				is_goal={`${isGoal}`}
			>
				<Image item_id={combo_id} />
				<div className='help-container'>
					{/* <Emoji item={item1}/>
					<Emoji item={item2}/> */}
					<Image className='tiny' item_id={item1} />
					<Image className='tiny' item_id={item2} />
				</div>
				{/* {this.state.tooltipActive && (
					<div className='combo-tip tooltip'>
						<Image item_id={combo_id} />
						<p>{combo.perk_full}</p>
					</div>
				)} */}
			</a>
		);
	}
}

const mapStateToProps = state => ({
	inventory : state.items.inventory,
	goals     : state.goals,
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

export default connect(mapStateToProps, mapDispatchToProps)(ComboItem);

ComboItem.defaultProps = {
	item1 : '',
	item2 : '',
};
