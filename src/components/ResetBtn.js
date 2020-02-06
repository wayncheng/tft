import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {resetInventory} from '../modules/items';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class ResetBtn extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = event => {
		event.preventDefault();
		const confirmed = window.confirm('Are you sure you want to reset your inventory?');
		if (confirmed === true){
			console.log('===> RESET')
			this.props.resetInventory();
		}
	};

	render() {
		return (
			<button
				id='reset-items'
				className={classNames('reset-btn text-white', this.props.className)}
				type='button'
				onClick={this.handleClick}
			>
				Reset
				{/* <FontAwesomeIcon icon='history' className={classNames('reset-icon')} /> */}
				{/* <FontAwesomeIcon icon={['far','trash-alt']} className={classNames('reset-icon')} /> */}
			</button>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			resetInventory,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(ResetBtn);
