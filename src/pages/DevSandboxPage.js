import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {
	// Item,
	Footer,
	// Goals,
	// AllGoals,
	// GoalsModalTrigger,
	PhotoLightbox,
} from '../components';
import constants from '../utils/constants';
const {patch_version,versions} = constants;
const {
	full_sheet_local,
	item_sheet_local,
	wide_sheet_local,
	item_sheet,
	wide_sheet,
	full_sheet,
} = versions[patch_version];


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
				<Helmet>
					<title>Sandbox (DEV)</title>
					{/* <link rel='shortcut icon' href='/favicon-blue.ico' /> */}
					{/* <link rel='shortcut icon' href='/favicon-white.ico' /> */}
					{/* <link rel='shortcut icon' href='/favicon-gray.ico' /> */}
				</Helmet>
				<main>
					<section className="text-white">
						<p>{`Patch ${patch_version}`}</p>
						<p><a href={item_sheet}>Item Sheet</a></p>
						<p><a href={full_sheet}>Full Sheet</a></p>
						<p><a href={wide_sheet}>Wide Sheet</a></p>
						<p><a href={item_sheet_local}>Item Sheet Local</a></p>
						<p><a href={full_sheet_local}>Full Sheet Local</a></p>
						<p><a href={wide_sheet_local}>Wide Sheet Local</a></p>
					</section>
					<PhotoLightbox/>
					{/* <GoalsModalTrigger/> */}
					{/* <AllGoals/> */}

					<section className="text-white pt-12">
					<p>
						<Link to='/test'>Test Page Link (react-router-dom)</Link>
					</p>
					<p>
						<a href='/test'>Test Page Link (standard html)</a>
					</p>
					</section>

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
