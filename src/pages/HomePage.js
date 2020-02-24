import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Inventory, Combos, BaseItemSelectionPanel, Footer, PhotoLightbox, PageRoot} from '../components';
import constants from '../utils/constants';


class HomePage extends Component {
	render() {
		return (
			<PageRoot id='item-page-root' className='page-root flex flex-col	justify-between'>
				<main className='flex-1 flex flex-col justify-stretch align-stretch relative'>
					{/* <p className='patch-version eyebrow'>{`Patch ${constants.patch_version}`}</p> */}
					<p className='patch-version eyebrow'>
							{/* <span className="">v</span> */}
							{/* <span className="mr-2">Patch</span> */}
						<span className="fg-light-disabled">{constants.patch_version}</span>
							{/* <span className="ml-2">Patch</span> */}
						</p>
					<Inventory className='bg-gray-700' />
					<Combos className='bg-gray-800' />
					<BaseItemSelectionPanel className='' />
				</main>

				<Footer />
				<PhotoLightbox local />
			</PageRoot>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
