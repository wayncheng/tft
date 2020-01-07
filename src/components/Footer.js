import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = props => {
	return (
		<footer className={classNames('footer p-6 bg-gray-700', props.className)}>
			<a
				href='https://progameguides.com/wp-content/uploads/2019/06/tft-full-item-cheat-sheet-desktop-set2-9-24b.png'
				target='_blank'
				rel='noopener noreferrer'
			>
				Full Cheat Sheet (9.24)
				<FontAwesomeIcon icon='external-link-alt' className='ml-3 ext-link-icon' />
			</a>
		</footer>
	);
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
