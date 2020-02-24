import React, {Component} from 'react';
import {PhotoSwipe} from 'react-photoswipe';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openGallery, closeGallery} from '../../modules/modal';
import constants from '../../utils/constants';
import '../../static/libs/react-photoswipe/photoswipe.css';
import './Lightbox.scss';
// options: https://photoswipe.com/documentation/options.html

class PhotoLightbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen : false,
		};
	}

	// handleOpen = event => {
	// 	event.preventDefault();
	// 	console.log('open lightbox >>>');
	// 	this.setState({isOpen: true});
	// 	this.props.openGallery();
	// };
	handleClose = () => {
		console.log('close lightbox >>>');
		this.setState({isOpen: false});
		this.props.closeGallery();
	};
	render = () => {
		const {
			full_cheatsheet_local,
			item_cheatsheet_local,
			wide_cheatsheet_local,
			full_cheatsheet,
			item_cheatsheet,
			wide_cheatsheet,
		} = constants;
		let items = [
			{
				src   : this.props.local ? full_cheatsheet_local : full_cheatsheet,
				w     : 1639,
				h     : 1627,
				title : 'Full Cheatsheet',
				pid   : 'full',
			},
			{
				src   : this.props.local ? item_cheatsheet_local : item_cheatsheet,
				w     : 1641,
				h     : 740,
				title : 'Items',
				pid   : 'item',
			},
			{
				src   : this.props.local ? wide_cheatsheet_local : wide_cheatsheet,
				w     : 1920,
				h     : 1080,
				title : 'Wide Cheatsheet',
				pid   : 'wide',
			},
		];
		return (
			<PhotoSwipe
				// isOpen={this.state.isOpen}
				isOpen={this.props.galleryOpen}
				items={items}
				options={{
					galleryUID            : 'imgs',
					// bgOpacity: 0.5,
					preload               : [ 1, 2 ],
					// showAnimationDuration : 0,
					// Buttons/elements
					shareEl               : false,
					arrowEl               : false,
					captionEl             : false,
					fullscreenEl          : false,
					closeEl               : true,
					zoomEl                : true,
					counterEl             : true,
					preloaderEl           : false,
				}}
				onClose={this.handleClose}
			/>
		);
	};
}

// Redux ==================================================
const mapStateToProps = state => ({
	galleryOpen : state.modal.galleryOpen,
	photoID     : state.modal.photoID,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			openGallery,
			closeGallery,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(PhotoLightbox);
