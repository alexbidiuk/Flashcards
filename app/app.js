
// Import all the third party stuff
import styles from './global-styles.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// Import Redux stuff

import { store } from './stores/store';
import * as localStore from './localStorage.js';
import { fetchData } from './actions/fetch.js'; 

// Import React stuff

import App from './components/App.js';
import VisibleCards from './components/VisibleCards.js';
import NewCardModal from './components/NewCardModal.js';
import EditCardModal from './components/EditCardModal.js';
import StudyModal from './components/StudyModal.js';

// import { applyRouterMiddleware, Router, browserHistory } from 'react-router';

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
	<Route path='/' component={ App }>
		<Route path='/deck/:deckId' component={ VisibleCards }>
			<Route path='/deck/:deckId/new' component={ NewCardModal }>
			</Route>
			<Route path='/deck/:deckId/edit/:cardId' component={ EditCardModal }>
			</Route>
			<Route path='/deck/:deckId/study' component={ StudyModal }>
			</Route>
		</Route>
	</Route>
);

function run () {

	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				{routes}
			</Router>
		</Provider>, 
		document.getElementById('app')
	);
}

function save () {

	let state = store.getState();
	fetch('/api/data', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			decks: state.decks,
			cards: state.cards
		});
	});
}


functions init() {
	run();
	store.subscribe(run);
	store.subscribe(save);
	store.dispatch(fetchData())
	
}

init();


// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
