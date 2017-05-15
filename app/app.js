
// Import all the third party stuff
import styles from './global-styles.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// Import Redux stuff

import { store } from './stores/store';

// Import React stuff

import App from './components/App.js';
import VisibleCards from './components/VisibleCards.js'

// import { applyRouterMiddleware, Router, browserHistory } from 'react-router';

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
	<Route path='/' component={ App }>
		<Route path='/deck/:deckId' component={ VisibleCards }>
		</Route>
	</Route>
);

function run () {

	let state = store.getState();

	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				{routes}
			</Router>
		</Provider>, 
		document.getElementById('app')
	);
}

run();

store.subscribe(run);



// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
