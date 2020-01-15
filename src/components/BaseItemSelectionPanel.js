import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Item, DetailToggle} from '.';
import classNames from 'classnames';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class BaseItemSelectionPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<aside className='select-panel-container'>
				<div className={classNames('select-panel items-sec', this.props.className)}>
					{/* <DetailToggle className='' /> */}
					{this.props.base.map((baseItem, index) => {
						return (
							<Item className='sel-item' item_id={baseItem} key={'item-' + baseItem} />
						);
					})}
				</div>
			</aside>
		);
	}
}

const mapStateToProps = state => ({
	base : state.items.base,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BaseItemSelectionPanel);

// BaseItemSelectionPanel.defaultProps = {};
