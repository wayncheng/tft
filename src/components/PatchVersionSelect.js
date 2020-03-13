import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPatchVersion} from '../modules/general';
import classNames from 'classnames';

class PatchVersionSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sortBy : '',
		};
	}

	handleChange = event => {
		const selectedVersion = event.target.value.trim();
		console.log('selectedVersion:',selectedVersion);
		this.props.setPatchVersion(selectedVersion)
	};

	render() {
		return (
			<div {...this.props} className={classNames('patch-control-container mb-4',this.props.className)}>
				<form id='patch-control' onSubmit={this.handleSubmit}>
					<div className='field'>
						<label htmlFor='patch-control-input' className='hidden'>
							Patch
						</label>
						<select
							id='patch-control-input'
							className='form-select input'
							value={this.props.patch_version}
							onChange={this.handleChange}
						>
							<option value="beta">Beta</option>
							<option value="10.6">10.6</option>
							<option value="10.5">10.5</option>
						</select>
					</div>
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	patch_version: state.general.patch_version,
});

const mapDispatchToProps = dispatch => bindActionCreators( {
	setPatchVersion,
}, dispatch, );

export default connect(mapStateToProps, mapDispatchToProps)(PatchVersionSelect);
