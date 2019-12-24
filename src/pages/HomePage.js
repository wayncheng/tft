import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {Helmet} from 'react-helmet';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {
	// Item,
	Inventory,
	Combos,
	BaseItemSelectionPanel,
	ItemTable,
} from '../components';
// import itemData from '../utils/item_data';
import itemTable from '../static/img/item-table.png';
import {addItem, removeItem, processKey} from '../modules/items';
// const items = [ 'sword', 'vest', 'belt', 'rod', 'cloak', 'bow', 'spatula', 'tear', 'glove' ];
class HomePage extends Component {
	handleKeyEvent = (key, event) => {
		event.preventDefault();
		this.props.processKey(key);
	};

	render() {
		return (
			<div className='page-root flex flex-col	justify-between'>
				{/* <Helmet title='TFT Items' /> */}
				<section className='table-section p-4 w-full flex justify-center align-center flex-1 m-auto bg-gray-900'>
				<ItemTable/>
				</section>
				{/* <section className='big-img-container flex-1 m-auto bg-gray-500'>
					<img className='w-full' src={itemTable} alt='item cheat sheet' />
				</section> */}

				<main className='flex-1 flex flex-col justify-stretch'>
					{/* <Combos className='bg-gray-800' /> */}
					<Inventory className='bg-gray-800' />
					<BaseItemSelectionPanel className='bg-gray-700' />
				</main>

				<KeyboardEventHandler
					handleKeys={[
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'shift+1',
						'shift+2',
						'shift+3',
						'shift+4',
						'shift+5',
						'shift+6',
						'shift+7',
						'shift+8',
						'shift+9',
					]}
					onKeyEvent={this.handleKeyEvent}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	combos : state.items.combos,
	base   : state.items.base,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			addItem,
			removeItem,
			processKey,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
