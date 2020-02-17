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
	PhotoLightbox,
	// PatchVersionBanner,
} from '../components';
// import itemData from '../utils/item_data';
// import itemTable from '../static/img/item-table.png';
import {addItem, removeItem, processKey} from '../modules/items';
import constants from '../utils/constants';
// const items = [ 'sword', 'vest', 'belt', 'rod', 'cloak', 'bow', 'spatula', 'tear', 'glove' ];
class HomePage extends Component {
	handleKeyEvent = (key, event) => {
		event.preventDefault();
		this.props.processKey(key);
	};

	render() {
		return (
			<div id='item-page-root' className='page-root flex flex-col	justify-between'>
				<main className='flex-1 flex flex-col justify-stretch align-stretch relative'>
					<p className='patch-version eyebrow'>{`Patch ${constants.patch_version}`}</p>
					<Inventory className='bg-gray-700' />
					<Combos className='bg-gray-800' />
					<BaseItemSelectionPanel className='' />
				</main>
				
				<Footer />
				<PhotoLightbox />

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
	...state.items,
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
