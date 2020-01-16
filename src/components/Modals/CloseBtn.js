import React from 'react';
import classNames from 'classnames';
import { ModalTrigger } from '../';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CloseBtn = props => {
	return (
		<ModalTrigger
			className={classNames("close-btn", {
				'top-0':    props.top,
				'bottom-0': props.bottom,
				'left-0':   props.left,
				'right-0':  props.right,
			})}
			modal_id={props.modal_id}
			modal_action="close"
		>
			<FontAwesomeIcon icon="times"/>
		</ModalTrigger>
	);
};
export default CloseBtn;
