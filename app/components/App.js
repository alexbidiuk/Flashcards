import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Sidebar from './Sidebar.js';
import Toolbar from './Toolbar.js';

const mapStateToProps = (props, { params: { deckId } }) => {
	return ({
		deckId
	});
}

const App = ({ deckId, children}) => {
	return (
		<div className='app'>
			<Toolbar deckId={deckId}/>
			<Sidebar />
			{children}
		</div>);
};

export default connect(mapStateToProps)(App);