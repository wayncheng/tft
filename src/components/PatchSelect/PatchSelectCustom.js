import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPatchVersion} from '../../modules/general';
import classNames from 'classnames';
import {PatchVersionSelect} from '..';

class PatchSelectCustom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	handleChange = event => {
		const selectedVersion = event.target.value.trim();
		console.log('selectedVersion:', selectedVersion);
		this.props.setPatchVersion(selectedVersion);
	};

	render() {
		return (
			<div {...this.props} className={classNames('patch-select-container form-select-container z-top','absolute top-0 left-0', this.props.className)} id='patch-control'>
				<a href="#!" className="selected-patch">{this.props.patch_version}</a>
				<ul id='patch-select-list' className='' onChange={this.handleChange}>
					<li ><a value='beta' href="#!" className="select-option">beta</a></li>
					<li ><a value='10.6' href="#!" className="select-option">10.6</a></li>
					<li ><a value='10.5' href="#!" className="select-option">10.5</a></li>
				</ul>
				<PatchVersionSelect className='offscreen' />

			</div>
		);
	}
}
const mapStateToProps = state => ({
	patch_version : state.general.patch_version,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setPatchVersion,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(PatchSelectCustom);
