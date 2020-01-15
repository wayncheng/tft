import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
// import './ToggleSwitch.scss';

class ToggleSwitch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked  : false,
			disabled : false,
		};
	}

	handleDisable = disabled => {
		this.setState({disabled});
	};

	handleCheck = checked => {
		this.setState({checked});
	};

	render() {
		return (
			<div className={classNames('react-switch-container', this.props.container_class)}>
				<Switch
					{...this.props}
					id={this.props.id}
					onChange={this.props.onChange || this.handleCheck}
					checked={this.props.checked || this.state.checked}
					disabled={this.props.disabled || this.state.disabled}
					className={classNames('react-switch', this.props.className)}
					// onColor='#2ecc71'
					onColor='#3498db'
					onHandleColor='#ffffff'
					handleDiameter={20}
					// uncheckedIcon={false}
					// checkedIcon={false}
					// boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)"
					activeBoxShadow='0px 0px 1px 4px rgba(0, 0, 0, 0.2)'
					height={24}
					width={48}
				/>
				<label htmlFor={this.props.id}>{this.props.label}</label>
				{/* {this.props.children} */}
			</div>
		);
	}
}
export default ToggleSwitch;

ToggleSwitch.propTypes = {
	id       : PropTypes.string.isRequired,
	label    : PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
	checked  : PropTypes.bool,
	disabled : PropTypes.bool,
};

ToggleSwitch.defaultProps = {
	uncheckedIcon: false,
	checkedIcon: false,
}
