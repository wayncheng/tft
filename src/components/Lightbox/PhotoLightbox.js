import React, {Component} from 'react';
import {PhotoSwipe} from 'react-photoswipe';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openGallery, closeGallery} from '../../modules/modal';
// import constants from '../../utils/constants';
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
			full_sheet_local,
			item_sheet_local,
			wide_sheet_local,
			full_sheet,
			item_sheet,
			wide_sheet,
		} = this.props.constants;
		// } = constants.versions[constants.patch_version];

		let items = [
			{
				src   : this.props.local ? full_sheet_local : full_sheet,
				w     : 1920,
				h     : 1676,
				title : 'Full Cheatsheet',
				pid   : 'full',
			},
			{
				src   : this.props.local ? item_sheet_local : item_sheet,
				w     : 1920,
				h     : 750,
				title : 'Items',
				pid   : 'item',
			},
			{
				src   : this.props.local ? wide_sheet_local : wide_sheet,
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
					preload               : [ 0, 1 ],
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
	patch_version     : state.general.patch_version,
	constants     : state.general.constants,
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
