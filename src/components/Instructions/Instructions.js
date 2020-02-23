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
				<li>Select an item in the bottom bar to add it to your inventory</li>
				<li>Click on an item in your inventory to remove the item</li>
				<li>Select an item combination to add it to your combo inventory</li>
				<li>
					Toggle item details by flipping the <FontAwesomeIcon icon='info-circle' /> switch
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
				<li>Switch on combined items you would like to target</li>
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
