import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import constants from '../utils/constants';
// import { ResetBtn } from '.';
// import { ItemCheatSheetTrigger } from './Modals/ModalTrigger';

const Footer = props => {
	return (
		<footer className={classNames('footer p-0 pb-32 bg-gray-900', props.className)}>
			<p className='fine-print text-center text-sm w-full px-2 py-2 bg-gray-400'>{`Updated for Patch ${constants.patch_version}`}</p>
			{/* <ResetBtn className="absolute top-0 left-0 p-1"/> */}
			<div className='footer-nav row flex justify-center items-start pt-4'>
				<div className='col'>
					<ul className='footer-list'>
						<li>TFT Items</li>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<FooterLink to='https://github.com/wayncheng/tft' external>
								GitHub
							</FooterLink>
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
					<ul className='footer-list'>
						<li>{`Cheat Sheets (${constants.patch_version})`}</li>
						<li>
							<FooterLink to={constants.item_cheatsheet} external>
								{/* {`Items Cheat Sheet (${constants.patch_version})`} */}
								Items
							</FooterLink>
						</li>
						<li>
							<FooterLink to={constants.full_cheatsheet} external>
								{/* {`Full Cheat Sheet (${constants.patch_version})`} */}
								Full
							</FooterLink>
						</li>
						<li>
							<FooterLink to={constants.wide_cheatsheet} external>
								{/* {`Wide Cheat Sheet (${constants.patch_version})`} */}
								Wide
							</FooterLink>
						</li>
					</ul>
				</div>
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
