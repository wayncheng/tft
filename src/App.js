import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setGoalsFromLocal} from './modules/goals';
import './App.scss';
import HomePage from './pages/HomePage';
import DevSandboxPage from './pages/DevSandboxPage';

import './static/libs/tailwind.min.css';

class App extends Component {
	
	componentDidMount = () => {
		this.props.setGoalsFromLocal()
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
}, dispatch)

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(App)