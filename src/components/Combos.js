import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
// import itemData from '../utils/item_data';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Combos.scss';
import {
	// Item,
	ComboItem,
	ComboSpotlight,
	DetailedComboItem,
} from '../components';
import {toggleComboDetails} from '../modules/items';

class Combos extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleInfoToggle = event => {
		event.preventDefault();
		this.props.toggleComboDetails();
	};

	render() {
		const {
			// combos,
			unique,
		} = this.props;
		// console.log('combos:',combos);
		return (
			<section className={classNames('combos items-sec relative', this.props.className)}>
				<a href='#!' onClick={this.handleInfoToggle}>
					<h3 className='sec-title eyebrow'>
						<FontAwesomeIcon icon='info-circle' className="mx-2" />
						Combos
					</h3>
				</a>
				{/* <h3 className='sec-title icon-title text-2xl'>
					<FontAwesomeIcon icon='dice-six' />
				</h3> */}

				{unique.length > 0 && (
					<React.Fragment>
						{this.props.showComboDetails === true ? (
							<div className='row-container items-container'>
								{unique.map((pair, index) => {
									const split = pair.split('_');

									// return <ComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
									return <DetailedComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
								})}

								{/* Blank elements to align last row of grid */}
								<div className='detailed-container' />
								<div className='detailed-container' />
								<div className='detailed-container' />
							</div>
						) : (
							<div className='items-container flex-row justify-center m-auto'>
								{unique.map((pair, index) => {
									const split = pair.split('_');

									return <ComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
									// return <DetailedComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
								})}
							</div>
						)}
						{/* <div className='row-container items-container'>
							{unique.map((pair, index) => {
								const split = pair.split('_');

								// return <ComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
								return <DetailedComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
							})}

							<div className='detailed-container' />
							<div className='detailed-container' />
							<div className='detailed-container' />
						</div> */}
					</React.Fragment>
				)}

				<ComboSpotlight />
			</section>
		);
	}
}

const mapStateToProps = state => ({
	// combos : state.items.combos,
	// unique : state.items.unique,
	...state.items,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			toggleComboDetails,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(Combos);

// Combos.defaultProps = {};
