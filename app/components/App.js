import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Sidebar from './Sidebar.js';

const mapStateToProps = (state, { params: { deckId } }) => ({
	deckId
});

const App = ({ deckId, children}) => {
	return (
		<div className='app'>
			<Sidebar />
			<h1>Deck {deckId}</h1>
			{children}
		</div>);
};

export default connect(mapStateToProps)(App);