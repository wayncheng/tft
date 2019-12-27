import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {togglePerks} from '../modules/items';

class PerkToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = event => {
		event.preventDefault();
		this.props.togglePerks();
	};

	render() {
		return (
			<button
				id='perk-toggle'
				className={classNames('perk-toggle', 'text-md flex-1', this.props.className)}
				type='button'
				onClick={this.handleClick}
			>
				{/* Info */}
				<FontAwesomeIcon icon='info-circle' className={classNames('info-icon')} />
			</button>
		);
	}
}

const mapStateToProps = state => ({
	showPerks : state.items.showPerks,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			togglePerks,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(PerkToggle);

// PerkToggle.defaultProps = {};
