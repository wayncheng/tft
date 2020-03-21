import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setPatchVersion} from '../../modules/general';
import classNames from 'classnames';
import constants from '../../utils/constants';

class PatchToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isBeta : false,
		};
	}

	// componentDidUpdate = (prevProps,prevState) => {
	// 	if (prevProps.patch_version === constants.patch_version){
	// 		this.setState({isBeta: false})
	// 	} else {
	// 		this.setState({isBeta: true})
	// 	}
	// }

	handleToggle = event => {
		event.preventDefault();
		const currentVersion = constants.patch_version;
		const nextVersion = constants.next_version;
		const isCurrent = this.props.patch_version === currentVersion;
		const selectedVersion = isCurrent ? nextVersion : currentVersion;
		this.props.setPatchVersion(selectedVersion);
	};

	render() {
		return (
			<a
				id='patch-toggle-btn'
				href='#!'
				className={classNames('patch-toggle absolute top-0 left-0 p-2 z-top', this.props.className,{
					'is-beta-patch': this.props.patch_version !== constants.patch_version,
				})}
				onClick={this.handleToggle}
			>
				{this.props.patch_version}
			</a>
			// <div {...this.props} className={classNames('patch-toggle-container z-top','absolute top-0 left-0', this.props.className)} id='patch-control'>
			// 	<button type="button" className="patch-toggle btn" onClick={this.handleToggle}>{this.props.patch_version}</button>
			// </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PatchToggle);
