import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import itemData from '../utils/item_data';
import {makeCombo, mouseEnterCombo,mouseLeaveCombo,} from '../modules/items';
import {Icon} from '.';

class ComboItem extends Component {
	handleClick = event => {
		event.preventDefault();

		const {item1, item2} = this.props;
		this.props.makeCombo(item1, item2);
	};

	handleMouseEnter = event => {
		event.preventDefault();
		const {item1,item2} = this.props;
		this.props.mouseEnterCombo(item1,item2)
	}
	handleMouseLeave = event => {
		event.preventDefault();
		this.props.mouseLeaveCombo()
	}

	render() {
		// const {item1, item2} = this.props;
		const sorted = [this.props.item1,this.props.item2].sort();
		const item1 = sorted[0];
		const item2 = sorted[1];
		const combo_id = `${item1}_${item2}`;
		const combo = itemData[combo_id];

		return (
			<a
				href='#!'
				className={classNames('item', 'combo-item', 'flex flex-col', this.props.className)}
				item1={item1}
				item2={item2}
				item_id={combo_id}
				onClick={this.handleClick}
				// onMouseEnter={this.handleMouseEnter}
				// onMouseLeave={this.handleMouseLeave}
			>
				<Icon item_id={combo_id} />
				<div className='help-container flex flex-row justify-around'>
					<Icon className='tiny' item_id={item1} />
					<Icon className='tiny' item_id={item2} />
				</div>
			</a>
		);
	}
}

const mapStateToProps = state => ({
	inventory: state.items.inventory,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			makeCombo,
			mouseEnterCombo,
			mouseLeaveCombo,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(ComboItem);

ComboItem.defaultProps = {
	item1 : '',
	item2 : '',
};
