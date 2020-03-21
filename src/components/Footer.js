import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PatchVersionBanner, ModalTrigger} from '.';
import constants from '../utils/constants';

const Footer = props => {
	const {patch_version, versions} = constants;
	const versionConstants = versions[patch_version];
	const {item_sheet, full_sheet, wide_sheet} = versionConstants;

	return (
		<footer className={classNames('footer p-0 pb-48 bg-gray-900', props.className)}>
			<PatchVersionBanner />
			<div className='footer-nav row flex justify-center items-start pt-4'>
				{/* Navigation ========================================== */}
				<div className='col'>
					<ul className='footer-list'>
						<li className='footer-title'>TFT Item Caddie</li>
						<li>
							<Link to='/'>{`Current Patch (${patch_version})`}</Link>
						</li>
						<li>
							<Link to='/beta'>PBE Patch</Link>
						</li>
						{process.env.NODE_ENV === 'development' && (
							<React.Fragment>
								<li>
									<a href='/dev'>Sandbox</a>
								</li>
								<li>
									<a href='/test'>Test</a>
								</li>
							</React.Fragment>
						)}
					</ul>
				</div>
				{/* About Column ======================================== */}
				<div className='col'>
					<ul className='footer-list'>
						<li className='footer-title'>About the App</li>
						<li>{`Version ${process.env.REACT_APP_VERSION}`}</li>
						<li>
							<ModalTrigger modal_id='instructions' modal_action='open' className=''>
								Help
							</ModalTrigger>
						</li>
						<li>
							<FooterLink to='https://github.com/wayncheng/tft' external>
								GitHub
							</FooterLink>
						</li>
					</ul>
				</div>
				{/* Resources =========================================== */}
				<div className='col'>
					<ul className='footer-list'>
						<li className='footer-title'>{`Cheat Sheets (${patch_version})`}</li>
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

			{/* ========================================================================================================== */}
			{/* <div className='row flex flex-col justify-center items-center text-gray-600 text-sm'>
				<p>{`App Version: ${process.env.REACT_APP_VERSION}`}</p>
				<p className='fg-disabled'>{`Environment: ${process.env.REACT_APP_ENV}`}</p>
			</div> */}
			{/* ========================================================================================================== */}
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
