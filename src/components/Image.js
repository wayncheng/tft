import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import itemData from '../utils/item_data';
import classNames from 'classnames';

class Image extends Component {
	render() {
		const {item_id, src, ext} = this.props;
		const item = this.props.itemData[item_id];
		return (
			<img
				{...this.props}
				// className={classNames('item-img',this.props.className)}
				className={classNames('item-img sized', this.props.className)}
				src={`${src}/${item.id}.${ext}`}
				alt={item.name || item.id}
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
