import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setGoalsFromLocal} from './modules/goals';
import {setPrefsFromLocal} from './modules/general';

import HomePage from './pages/HomePage';
import DevSandboxPage from './pages/DevSandboxPage';

import './App.scss';
import './static/libs/tailwind.min.css';

class App extends Component {
	
	componentDidMount = () => {
		this.props.setGoalsFromLocal()
		this.props.setPrefsFromLocal()
	}
	
	render() {
		return (
			<BrowserRouter basename={"/tft"}>
				<Switch>
					{process.env.NODE_ENV !== 'production' && (
						<Route exact path="/dev" component={DevSandboxPage} />
					)}
					<Route exact path="/" component={HomePage} />
				</Switch>
			</BrowserRouter>

		);
	}
}
const mapStateToProps = state => ({
	...state.general
})
const mapDispatchToProps = dispatch => bindActionCreators({
	setGoalsFromLocal,
	setPrefsFromLocal,
}, dispatch)

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App)