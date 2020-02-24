import React, {Component} from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
// import './PageRoot.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {processKey, handledKeys} from '../modules/general';

class PageRoot extends Component {
	handleKeyEvent = (key, event) => {
		event.preventDefault();
		console.log('key:', key);
		this.props.processKey(key);
	};
	render() {
		return (
			<div
				{...this.props}
				// onScroll={this.props.onScroll}
				// id={this.props.id}
				className={classNames('page-root', this.props.className)}
			>
				{this.props.page_title && <Helmet title={this.props.page_title} />}

				{this.props.children}

				<KeyboardEventHandler handleKeys={handledKeys} onKeyEvent={this.handleKeyEvent} />
			</div>
		);
	}
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			processKey,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(PageRoot);

PageRoot.propTypes = {
	id         : PropTypes.string,
	className  : PropTypes.string,
	page_title : PropTypes.string,
};

PageRoot.defaultProps = {
	page_title : '',
};
