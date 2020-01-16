import React, {Component} from 'react';
import {PhotoSwipe} from 'react-photoswipe';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { openGallery, closeGallery } from '../../modules/modal'

let items = [
	{
		src   : 'http://lorempixel.com/1200/900/sports/1',
		w     : 1200,
		h     : 900,
		title : 'Image 1',
		pid   : 'items',
	},
	{
		src   : 'http://lorempixel.com/1200/900/sports/2',
		w     : 1200,
		h     : 900,
		title : 'Image 2',
		pid   : 'complete',
	},
];

class PhotoLightbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen : true,
		};
	}

	handleClose = () => {
		// this.setState({isOpen: false});
		this.props.openGallery();
	};
	render = () => {
		return (
			<React.Fragment>
				<PhotoSwipe
					isOpen={this.state.galleryOpen}
					items={items}
					options={{
						galleryUID : 'imgs',
						//http://photoswipe.com/documentation/options.html
					}}
					onClose={this.handleClose}
				/>
				<button onClick={this.handleOpen}>click</button>
			</React.Fragment>
		);
	};
}

// export default PhotoLightbox;
// Redux ==================================================
const mapStateToProps = state => ({
	galleryOpen: state.galleryOpen,
	photoID: state.photoID,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	openGallery,
	closeGallery,
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PhotoLightbox)
