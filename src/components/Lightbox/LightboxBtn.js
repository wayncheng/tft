import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {openGallery, closeGallery} from '../../modules/modal';
// import {PhotoSwipe, PhotoSwipeGallery} from 'react-photoswipe';
// import '../../static/libs/react-photoswipe/photoswipe.css';
import './Lightbox.scss';
// options: https://photoswipe.com/documentation/options.html



class LightboxBtn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen : false,
		};
	}

	handleOpen = event => {
		event.preventDefault();
		console.log('open lightbox >>>');
		this.setState({isOpen: true});
		this.props.openGallery();
	};
	// handleClose = () => {
	// 	console.log('close lightbox >>>');
	// 	this.setState({isOpen: false});
	// 	this.props.closeGallery();
	// };
	render = () => {
		return (
			<React.Fragment>
				{/* <aside className=""> */}
					<button className={classNames('cheat-sheet-btn btn outline-btn eyebrow-item base-panel-btn px-2 py-0 text-xs uppercase',this.props.className)} onClick={this.handleOpen}>
						Cheat Sheets
					</button>
					{/* <PhotoSwipe
						// isOpen={this.state.isOpen}
						isOpen={this.props.galleryOpen}
						items={items}
						options={{
							galleryUID : 'imgs',
						}}
						onClose={this.handleClose}
					/> */}

					{/* <PhotoSwipeGallery
						items={items}
						// thumbnailContent={this.getThumbnailContent}
					/> */}
				{/* </aside> */}
			</React.Fragment>
		);
	};
}

// export default LightboxBtn;
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

export default connect(mapStateToProps, mapDispatchToProps)(LightboxBtn);


// let items = [
// 	{
// 		src   : constants.full_sheet,
// 		w     : 1639,
// 		h     : 1627,
// 		title : 'Full Cheatsheet',
// 		// pid   : 'full',
// 	},
// 	{
// 		src   : constants.item_sheet,
// 		w     : 1641,
// 		h     : 740,
// 		title : 'Items',
// 		// pid   : 'item',
// 	},
// 	{
// 		src   : constants.wide_sheet,
// 		w     : 1920,
// 		h     : 1080,
// 		title : 'Wide Cheatsheet',
// 		// pid   : 'wide',
// 	},
// ];