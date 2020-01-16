import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import itemData from '../utils/item_data';
import classNames from 'classnames';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import './Inventory.scss';
import {Item} from '../components';

class Inventory extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {inventory} = this.props;
		// console.log('inventory --->',inventory);
		return (
			<section
				className={classNames(
					'inventory items-sec',
					'relative flex flex-row flex-wrap justify-center p-4',
					this.props.className,
					{
						// 'empty-inv' : inventory.length === 0,
					},
				)}
			>
				{/* <h3 className='sec-title eyebrow'>Inventory</h3> */}
				{/* <h3 className='sec-title icon-title text-3xl'>
					<FontAwesomeIcon icon="dice"/>
				</h3> */}

				<div
					className={classNames('items-container flex flex-row justify-center m-auto flex-wrap', {
						'combo-hovered' : this.props.hoveringCombo,
					})}
				>
					{inventory.map((item_id, index) => {
						return (
							<Item
								action='remove'
								// className={classNames('inv-item')}
								className={'inv-item'}
								inv_index={index}
								item_id={item_id}
								key={'inv-item-' + index}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	// inventory: state.items.inventory,
	...state.items,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);

Inventory.defaultProps = {
	inventory : [],
};
