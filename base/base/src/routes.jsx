import React from 'react';
import { Route } from 'react-router';

export default (
	<Route>
		<Route path='/' />
		<Route path='/Contact' />
		<Route path='/Contact/:service' />
		<Route />
	</Route>
);