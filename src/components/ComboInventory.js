import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {Image} from '.';
// import constants from '../../utils/constants';

const ComboInventory = props => {
	return (
		<div
			className={classNames(
				'combo-inventory flex flex-row justify-center items-center flex-wrap p-0 m-0 mt-4 px-1 bg-gray-800',
				props.className,
			)}
		>
			{props.comboInventory.map((combo_id, index) => {
				return (
					<Image item_id={combo_id} className="tiny my-1 mx-1" key={index}/>
				);
			})}
		</div>
	);
};

const mapStateToProps = state => ({
	comboInventory : state.items.comboInventory,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ComboInventory);
