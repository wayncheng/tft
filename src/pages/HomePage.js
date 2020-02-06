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
	// ItemTable,
	Footer,
	// PhotoLightbox,
} from '../components';
// import itemData from '../utils/item_data';
// import itemTable from '../static/img/item-table.png';
import {addItem, removeItem, processKey} from '../modules/items';
// import constants from '../utils/constants';
// const items = [ 'sword', 'vest', 'belt', 'rod', 'cloak', 'bow', 'spatula', 'tear', 'glove' ];
class HomePage extends Component {
	handleKeyEvent = (key, event) => {
		event.preventDefault();
		this.props.processKey(key);
	};

	render() {
		return (
			<div id="item-page-root" className='page-root flex flex-col	justify-between'>
				{/* <Helmet title='TFT Items' /> */}

				<main className='flex-1 flex flex-col justify-stretch align-stretch'>
					<Inventory className='bg-gray-700' />
					<Combos className='bg-gray-800' />
					{/* <section className='section table-section w-full flex-col justify-center align-center flex-1 m-auto bg-gray-900'>
						<ItemTable />
					</section> */}
					<BaseItemSelectionPanel className='' />
				</main>
				{/* <aside className='big-img-container bg-gray-500'>
					<img className='cheat-sheet' src={constants.item_cheatsheet} alt='item cheat sheet' />
				</aside> */}

				{/* <PhotoLightbox/> */}
				<Footer />
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
