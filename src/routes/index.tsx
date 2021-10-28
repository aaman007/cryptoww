import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import BaseLayout from "../layouts/base";
import * as urls from "../urls";

const routes = [
	{
		path: urls.home(),
		component: Home,
		exact: true
	},
	{
		path: urls.explore(),
		component: Explore,
		exact: true
	}
]

const Routes = () => {
	const renderRoutes = () => {
		return routes.map(route => (
			<Route
				key={ route.path }
				path={ route.path }
				exact={ route.exact }
				render={(props) => {
					return (
						<BaseLayout>
							<route.component />
						</BaseLayout>
					)
				}}
			/>
		));
	}

	return (
		<Router>
			{ renderRoutes() }
		</Router>
	);
};

export default Routes;