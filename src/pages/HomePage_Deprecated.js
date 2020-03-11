import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Inventory, Combos, BaseItemSelectionPanel, Footer, PhotoLightbox, PageRoot} from '../components';
import {setPatchVersion} from '../modules/general';

import {patch_version} from '../utils/constants';


class HomePage extends Component {

	componentDidMount = () => {
		this.props.setPatchVersion('10.5');
	}
	render() {
		return (
			<PageRoot id='item-page-root' className='page-root flex flex-col	justify-between' version={patch_version}>
				<main className='flex-1 flex flex-col justify-stretch align-stretch relative'>
					{/* <p className='patch-version eyebrow'>{`Patch ${patch_version}`}</p> */}
					<p className='patch-version eyebrow'>
							{/* <span className="">v</span> */}
							{/* <span className="mr-2">Patch</span> */}
						<span className="fg-light-disabled">{patch_version}</span>
							{/* <span className="ml-2">Patch</span> */}
						</p>
					<Inventory version={patch_version} className='bg-gray-700' />
					<Combos version={patch_version} className='bg-gray-800' />
					<BaseItemSelectionPanel version={patch_version} className='' />
				</main>

				<Footer version={patch_version}/>
				<PhotoLightbox version={patch_version} local />
			</PageRoot>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({
	setPatchVersion,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
