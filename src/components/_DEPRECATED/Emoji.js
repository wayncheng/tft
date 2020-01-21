import React from 'react';
import classNames from 'classnames';

const Emoji = props => {
	const {item} = props;
	const emojis = {
		belt    : '💫', //🌙
		bow     : '🏹',
		cloak   : '🧄', //👗🧄🎗
		glove   : '🤛🏽', //👊🤛✊🤛🏽👊🏽
		rod     : '🍆', //💈🍆🍢 🍡🥖
		spatula : '🔑', //🔑🔧🥄
		sword   : '🗡️',
		tear    : '💧',
		vest    : '🎽', //🎽🦺
	};
	return (
		<span className={classNames("emoji",props.className)}
			style={{
				fontSize: '0.3em'
			}}
		>
			{emojis[item]}
		</span>
	);
};
export default Emoji;

Emoji.defaultProps = {
	item_id : '',
};
