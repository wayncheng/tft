import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Icon, PerkToggle,ComboItem} from '.';
import classNames from 'classnames';
import itemData from '../utils/item_data';

class ItemTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<table className={classNames('item-table', {'show-perks': this.props.showPerks},this.props.className)}>
				{/* <thead>
					<tr>
						<th />
						{this.props.base.map(item => {
							return (
								<th key={`heading-${item}`}>
									<Icon item_id={item} />
								</th>
							);
						})}
					</tr>
				</thead> */}

				<tbody>
					{this.props.base.map((itemA, indexA) => {
						return (
							<tr className='body-row' key={`row-${itemA}`}>
								<th>
									<Icon item_id={itemA} />
								</th>
								{this.props.base.map((itemB, indexB) => {
									const combo = [ itemA, itemB ].sort();
									const comboID = combo.join('_');
									// Set active flag if this comboID is in the array of possible combos
									const comboIndex = this.props.unique.indexOf(comboID);
									// const isRepeat = (indexB < indexA);
									const isRepeat = indexB > indexA;
									const item = itemData[comboID];

									return (
										<td
											className={classNames(
												'table-item combo-cell', 
												comboID, {
												possible    : comboIndex !== -1,
												'is-repeat' : isRepeat,
											})}
											data-item={comboID}
											id={`item_${indexA}-${indexB}`}
											key={`combo-${comboID}`}
										>
											{!isRepeat && (
												<div className={classNames("combo-container flex flex-row align-center")}>
													{/* <Icon item_id={comboID} /> */}
													<ComboItem item1={itemA} item2={itemB} />
													<span className="perk">{item.perk}</span>
												</div>
											)}
										</td>
									);
								})}
							</tr>
						);
					})}
					<tr className='head-row'>
		
					<th className="perk-toggle-cell">
							<PerkToggle/>
						</th>
						{this.props.base.map(item => {
							return (
								<th key={`heading-${item}`}>
									<Icon item_id={item} />
								</th>
							);
						})}
					</tr>
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = state => ({
	base      : state.items.base,
	inventory : state.items.inventory,
	unique    : state.items.unique,
	showPerks    : state.items.showPerks,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemTable);

// ItemTable.defaultProps = {};
