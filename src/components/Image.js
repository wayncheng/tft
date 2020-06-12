import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import itemData from '../utils/item_data';
import classNames from 'classnames';

class Image extends Component {
	render() {
		const {item_id, src, ext} = this.props;
		const item = this.props.itemData[item_id];
		let description = item.name || item.id;
		if (item_id.indexOf('_') !== -1){
			// const parts = item_id.split('_')
			// description = `${item.name} (${parts[0]} + ${parts[1]})`
			description = `${item.name}`
		}

		return (
			<img
				// {...this.props}
				id={this.props.id}
				className={classNames('item-img sized', this.props.className)}
				src={`${src}/${item.id}.${ext}`}
				alt={description}
				title={description}
			/>
		);
	}
}
const mapStateToProps = state => ({
	itemData : state.general.itemData,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Image);

Image.defaultProps = {
	src     : 'https://blitz-cdn.blitz.gg/blitz/tft/items',
	ext     : 'png',
	item_id : '',
};
