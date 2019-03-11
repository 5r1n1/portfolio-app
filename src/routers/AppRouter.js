import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header'
import PFHomePage from '../components/PFHomePage'
import PFContactPage from '../components/PFContactPage'
import PFPortfolioPage from '../components/PFPortfolioPage'
import PFPortfolioItemPage from '../components/PFPortfolioItemPage'
import NowherePage from '../components/NowherePage'

const AppRouter = () =>
  <Router>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={PFHomePage} exact={true}/>
				<Route path="/portfolio" component={PFPortfolioPage} exact={true}/>
				<Route path="/portfolio/:id" component={PFPortfolioItemPage}/>
				<Route path="/contact" component={PFContactPage}/>
				<Route component={NowherePage}/>
			</Switch>
		</div>
  </Router>

export default AppRouter