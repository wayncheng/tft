import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	PatchVersionBanner, 
	ModalTrigger
} from '.';
import constants from '../utils/constants';

const Footer = props => {
	const {patch_version,versions} = constants;
	const versionConstants = versions[patch_version];
	const {item_sheet,full_sheet,wide_sheet} = versionConstants;

	return (
		<footer className={classNames('footer p-0 pb-32 bg-gray-900', props.className)}>
			<PatchVersionBanner />
			<div className='footer-nav row flex justify-center items-start pt-4'>
				<div className='col'>
					<ul className='footer-list'>
						<li>TFT Item Caddie</li>
						<li><a href='/'>{`Current Patch (${patch_version})`}</a></li>
						<li><a href='/beta'>PBE Patch</a></li>
						<li>
							<ModalTrigger modal_id='instructions' modal_action='open' className="">
								Help
							</ModalTrigger>
						</li>
						<li>
							<FooterLink to='https://github.com/wayncheng/tft' external>
								GitHub
							</FooterLink>
						</li>
						{process.env.NODE_ENV === 'dev' && (
							<li>
								<a href='/dev'>Sandbox</a>
							</li>
						)}
					</ul>
				</div>
				<div className='col'>
					<ul className='footer-list'>
						<li>{`Cheat Sheets (${patch_version})`}</li>
						<li>
							<FooterLink to={item_sheet} external>
								Items
							</FooterLink>
						</li>
						<li>
							<FooterLink to={full_sheet} external>
								Full
							</FooterLink>
						</li>
						<li>
							<FooterLink to={wide_sheet} external>
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
