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

class Combos extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			// combos,
			unique,
		} = this.props;
		// console.log('combos:',combos);
		return (
			<section className={classNames('combos items-sec relative', this.props.className)}>
				<h3 className="sec-title eyebrow">Possible Combos</h3>
				{/* <h3 className='sec-title icon-title text-2xl'>
					<FontAwesomeIcon icon='dice-six' />
				</h3> */}

				{unique.length > 0 && (
					// <div className='col-container items-container flex-row justify-center m-auto'>
					<div className='row-container items-container'>
						{unique.map((pair, index) => {
							const split = pair.split('_');

							// return <ComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
							return <DetailedComboItem className='' item1={split[0]} item2={split[1]} key={'unique-' + index} />;
						})}

						{/* Blank elements to align last row of grid */}
						<div className="detailed-container"></div>
						<div className="detailed-container"></div>
						<div className="detailed-container"></div>
					</div>
				)}

				<ComboSpotlight/>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	combos : state.items.combos,
	unique : state.items.unique,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Combos);

// Combos.defaultProps = {};
