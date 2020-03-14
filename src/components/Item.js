import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {addItem, removeItem} from '../modules/items';
import {Image} from '../components';
// import './ItemOld.scss';
import './Item.scss';

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isIngredient : false,
		};
	}

	handleClick = event => {
		event.preventDefault();
		const {item_id, action} = this.props;
		// console.log('item_id:',item_id);
		if (action === 'add') {
			// console.log(`add ${item_id}`)
			this.props.addItem(item_id);
		} else if (action === 'remove') {
			// console.log(`remove ${item_id}`)
			this.props.removeItem(item_id);
		}
	};

	componentDidUpdate = prevProps => {
		if (prevProps.className !== this.props.className) {
			this.setState({
				isIngredient : this.props.ingredient,
			});
		}
	};

	render() {
		const {item_id, inv_index, ingredients} = this.props;
		const isIngredient = inv_index === ingredients[0] || inv_index === ingredients[1];

		return (
			<a
				href='#!'
				className={classNames('item sized', this.props.className, {
					ingredient : isIngredient,
					'show-keybind': this.props.showKeybinds === true && this.props.keybind, 
				})}
				data-ingredient={this.props.ingredient}
				data-item-id={item_id}
				onClick={this.handleClick}
			>
				<Image item_id={item_id} />
				{this.props.showKeybinds === true && this.props.keybind && (
					<span className="item-keybind">{this.props.keybind}</span>
				)}
			</a>
		);
	}
}

const mapStateToProps = state => ({
	ingredients : state.items.ingredients,
	showKeybinds: state.general.showKeybinds,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			addItem,
			removeItem,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Item);

Item.defaultProps = {
	item_id : '',
	action  : 'add',
	partner : '',
};
