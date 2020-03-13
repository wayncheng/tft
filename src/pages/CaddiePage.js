import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
	//
	PatchVersionSelect,
	Inventory,
	Combos,
	BaseItemSelectionPanel,
	Footer,
	PhotoLightbox,
	PageRoot,
} from '../components';
import {setPatchVersion} from '../modules/general';

class CaddiePage extends Component {
	componentDidMount = () => {
		this.props.setPatchVersion(this.props.version);

		console.log('patch version:', this.props.version);
	};

	render() {
		const {patch_version} = this.props;
		return (
			<PageRoot id='item-page-root' className='page-root flex flex-col	justify-between' version={patch_version}>
				<main className='flex-1 flex flex-col justify-stretch align-stretch relative'>
					<PatchVersionSelect className='absolute top-0 left-0 p-1' style={{
						zIndex: '10001',
					}} />

					{/* <p className='patch-version eyebrow'>{`Patch ${patch_version}`}</p> */}
					<p className='patch-version eyebrow' data-version={patch_version}>
						{/* <span className="">v</span> */}
						{/* <span className="mr-2">Patch</span> */}
						<span className='fg-light-disabled'>{patch_version}</span>
						{/* <span className="ml-2">Patch</span> */}
					</p>
					<Inventory className='bg-gray-700' />
					<Combos version={patch_version} className='bg-gray-800' />
					<BaseItemSelectionPanel version={patch_version} className='' />
				</main>

				<Footer version={patch_version} />
				<PhotoLightbox version={patch_version} local />
			</PageRoot>
		);
	}
}

const mapStateToProps = state => ({
	patch_version : state.general.patch_version,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setPatchVersion,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(CaddiePage);
