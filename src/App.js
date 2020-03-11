import React, {Component} from 'react';
import {
	Route,
	BrowserRouter,
	Switch,
	// Redirect,
} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setGoalsFromLocal} from './modules/goals';
import {setPrefsFromLocal, welcomeNewVisitors} from './modules/general';

// import HomePage from './pages/HomePage';
// import BetaPage from './pages/BetaPage';
// import NextPage from './pages/NextPage';
import DevSandboxPage from './pages/DevSandboxPage';
import {
	// HomePage, 
	// BetaPage, 
	// NextPage,
} from './pages/VersionedPage';
import CaddiePage from './pages/CaddiePage';

import constants from './utils/constants';
import './App.scss';
import './static/libs/tailwind.min.css';

class App extends Component {
	componentDidMount = () => {
		this.props.setGoalsFromLocal();
		this.props.setPrefsFromLocal();
		this.props.welcomeNewVisitors();

		console.log('process.env.NODE_ENV:',process.env.NODE_ENV);
		console.log('process.env.VERSION:',process.env.VERSION);
		console.log('process.env._VERSION_:',process.env._VERSION_);
		// console.log('_VERSION_:',_VERSION_);
	};

	render() {
		return (
			<BrowserRouter basename={'/tft'}>
				<Switch>
					{process.env.NODE_ENV !== 'production' && <Route exact path='/dev' component={DevSandboxPage} />}

					<Route exact path='/10.4' render={() => <CaddiePage version='10.4' />} />
					<Route exact path='/10.5' render={() => <CaddiePage version='10.5' />} />
					<Route exact path='/beta' render={() => <CaddiePage version='beta' />} />
					<Route exact path='/' render={() => <CaddiePage version={constants.patch_version} />} />
					{/* <Route exact path='/next' component={NextPage} /> */}
					{/* <Route exact path='/beta' component={BetaPage} /> */}
					{/* <Route exact path='/' component={HomePage} /> */}


					{/* 404 Page */}
					<Route component={NoMatch} />
				</Switch>
			</BrowserRouter>
		);
	}
}
const mapStateToProps = state => ({
	...state.general,
});
const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setGoalsFromLocal,
			setPrefsFromLocal,
			welcomeNewVisitors,
		},
		dispatch,
	);

export default connect(mapStateToProps, mapDispatchToProps)(App);

function NoMatch(props) {
	// let location = useLocation();
	// console.log('props:',props);
	const {pathname} = props.location;
	console.log('pathname:', pathname);
	return (
		<div
			className='fg-secondary text-2xl flex justify-center items-center'
			style={{
				// lineHeight : '98vh',
				width     : '100%',
				textAlign : 'center',
				height    : '100vh',
			}}
		>
			<h2
				className=''
				style={{
					lineHeight : '2em',
					width      : '100%',
				}}
			>
				{/* Inline version ........................ */}
				{/* Page not found: 
				<code className="ml-4">{pathname}</code> */}

				{/* Multi-line version ........................ */}
				<div className='mb-2'>Page not found:</div>
				<code className='text-4xl'>{pathname}</code>
			</h2>
		</div>
	);
}
