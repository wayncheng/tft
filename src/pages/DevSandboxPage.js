import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {
	// Item,
	Footer,
	// Goals,
	// AllGoals,
	// GoalsModalTrigger,
	PhotoLightbox,
} from '../components';
// import itemData from '../utils/item_data';
import constants from '../utils/constants';
class DevSandboxPage extends Component {

	calculate = () => {
		let inventory = [];
		inventory = [ 'A', 'B', 'C', 'D' ];
		// inventory = ['A','B','C','D','E']
		// inventory = ['A','A','B','C','D']
		// inventory = ['A','A','B','C','D','E']
		// inventory = ['A','B','C','D','E','F']
		const hash = {};
		const combos = [];
		const unique = {};

		for (let i = 0; i < inventory.length; i++) {
			const item = inventory[i];
			for (let j = 0; j < inventory.length; j++) {
				if (i !== j) {
					const partner = inventory[j];
					const pair = [ item, partner ].sort();

					// Unique unique
					unique[pair.join('')] = 1;

					// Combos
					const combo = `${i}${j}`;
					const opposite = `${j}${i}`;
					if (hash[opposite] === undefined) {
						combos.push(pair);
						hash[combo] = 1;
					}
				}
			}
		}


		return {
			hash,combos,unique,
		}
	}


	render() {
		// const {
		// 	hash,
		// 	combos,
		// 	unique
		// } = this.calculate();
		// const uniqueArr = Object.keys(unique);

		return (
			<div>
				<Helmet title='Sandbox (Dev)' />
				<main>
					<section className="text-white">
						<p>{`Patch ${constants.patch_version}`}</p>
						<p><a href={constants.item_cheatsheet}>Item Cheatsheet</a></p>
						<p><a href={constants.full_cheatsheet}>Full Cheatsheet</a></p>
						<p><a href={constants.wide_cheatsheet}>Wide Cheatsheet</a></p>
					</section>
					<PhotoLightbox/>
					{/* <GoalsModalTrigger/> */}
					{/* <AllGoals/> */}

					{/* <section className='flex flex-col'>
						<p>Combos</p>
						<span>{combos.length}</span>
						<pre> {JSON.stringify(combos.map(c => c.join('')), null, 2)} </pre>
						<p>Unique</p>
						<span>{uniqueArr.length}</span>
						<pre> {JSON.stringify(uniqueArr, null, 2)} </pre>
					</section> */}
				</main>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DevSandboxPage);
//
