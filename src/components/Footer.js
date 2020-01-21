import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import constants from '../utils/constants';
import { ResetBtn } from '.';
// import { ItemCheatSheetTrigger } from './Modals/ModalTrigger';

const Footer = props => {
	return (
		<footer className={classNames('footer row flex justify-center align-center bg-gray-700', props.className)}>
			{/* <ResetBtn className="absolute top-0 left-0 p-1"/> */}
			<div className='col'>
				<ul>
					<li>
						<a href='/'>Home</a>
					</li>
					{/* <li>
						<ResetBtn/>
					</li> */}
					{process.env.NODE_ENV === 'dev' && (
						<li>
							<a href='/dev'>Sandbox</a>
						</li>
					)}
				</ul>
			</div>
			<div className='col'>
				<ul>
					<li>
						<FooterLink to={constants.item_cheatsheet} external >
							{`Items Cheat Sheet (${constants.patch_version})`}
						</FooterLink>
					</li>
					<li>
						<FooterLink to={constants.full_cheatsheet} external >
							{`Full Cheat Sheet (${constants.patch_version})`}
						</FooterLink>
					</li>
					<li>
						<FooterLink to={constants.wide_cheatsheet} external >
							{`Wide Cheat Sheet (${constants.patch_version})`}
						</FooterLink>
					</li>
				</ul>
			</div>
		</footer>
	);
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Footer);

export const FooterLink = props => {
	return (
		<a href={props.to} target={props.external ? '_blank' : null} rel={props.external ? 'noopener noreferrer' : null}>
			{props.children}
			{/* {props.external && <FontAwesomeIcon icon='external-link-alt' className='ml-3 ext-link-icon' />} */}
		</a>
	);
};
