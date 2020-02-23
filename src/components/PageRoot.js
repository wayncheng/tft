import React, {Component} from 'react';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
// import './PageRoot.scss';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {processKey} from '../modules/items';

class PageRoot extends Component {
	handleKeyEvent = (key, event) => {
		event.preventDefault();
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

				<KeyboardEventHandler
					handleKeys={[
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'shift+1',
						'shift+2',
						'shift+3',
						'shift+4',
						'shift+5',
						'shift+6',
						'shift+7',
						'shift+8',
						'shift+9',
					]}
					onKeyEvent={this.handleKeyEvent}
				/>
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
