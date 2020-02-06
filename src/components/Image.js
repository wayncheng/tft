import React from 'react';
import itemData from '../utils/item_data';
import classNames from 'classnames';

const Image = props => {
	const {item_id, src, ext} = props;
	const item = itemData[item_id];
	return (
		<img 
			{...props}	
			// className={classNames('item-img',props.className)}
			className={classNames('item-img sized',props.className)}
			src={`${src}/${item.id}.${ext}`} 
			alt={item.name || item.id}
		/>
	)
}
export default Image;

Image.defaultProps = {
	src: 'https://blitz-cdn.blitz.gg/blitz/tft/items',
	ext: 'png',
	item_id : '',
}