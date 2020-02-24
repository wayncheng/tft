import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Modal, CloseBtn} from '..';

const Instructions = props => {
	return (
		<article className={classNames('instructions', props.className)}>
			<h3>Basics</h3>
			<ul className='bulleted'>
				<li className="">
					Select an item the bottom bar to add it to your inventory
					<ul className="">
						<li>
							You can also press keys <mark>1</mark> - <mark>9</mark> to adds items to your inventory, where <mark>1</mark> is the item on the far left (Giant's Belt) and <mark>9</mark> is on the far right (Chain Vest)
						</li>
					</ul>
				</li>
				<li>
					Click on an item in your inventory to remove it
					<ul>
						<li>
							<mark>Shift + 1</mark> - <mark>9</mark> removes items as well.
						</li>
						{/* <li>Keybinds: <mark>Shift</mark> + <mark>1</mark> - <mark>9</mark> to remove items from your inventory</li> */}
					</ul>
				</li>
				<li>All possible item combinations you can make are listed in the Combos area</li>
				<li>Select an item combination to add it to your combo inventory</li>
				<li>
					Toggle item details with the{' '}
					<mark className='outlined-mark'>
						<FontAwesomeIcon icon='info-circle' />
					</mark>{' '}
					switch
				</li>
			</ul>
			<h3 className='mt-4'>How to Set Item Targets</h3>
			<ol className='numbered'>
				<li>
					Press the{' '}
					<mark className='outlined-mark'>
						<FontAwesomeIcon icon='bullseye' /> Targets
					</mark>{' '}
					button
				</li>
				<li>Switch on the item combinations you want to target</li>
				<li>When a targeted item combo can be made, it will be highlighted in the Combos area</li>
			</ol>
		</article>
	);
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Instructions);

export const InstructionsModal = props => {
	return (
		<Modal
			id='instructions'
			className='instructions-modal default-modal p-8 px-12'
			rootClass='top-left-modal-root guide-modal-root'
		>
			<Instructions />
			<CloseBtn modal_id='instructions' />
		</Modal>
	);
};
