import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import constants from '../utils/constants';

const PatchVersionBanner = props => {
	return (
		<aside className={classNames('patch-version-banner bg-gray-400',{
			collapsed: props.collapse === true && (props.inventory.length !== 0 || props.comboInventory.length !== 0) 
		})}>
			<p className='fine-print'>
				{`Updated for Patch ${constants.patch_version}`}
			</p>
		</aside>
	);
};
const mapStateToProps = state => ({
	inventory: state.items.inventory,
	comboInventory: state.items.comboInventory,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PatchVersionBanner);
