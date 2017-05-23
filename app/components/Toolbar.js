import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { showAddDeck } from '../actions/decks.js';
import { filterCards } from '../actions/cards.js';

import { store } from '../stores/store';


const mapDispatchToProps = dispatch => ({
    showAddDeck: () => store.dispatch(showAddDeck()),
    onFilter: (query) => store.dispatch(filterCards(query))
});

const Toolbar = ({ deckId, showAddDeck, onFilter }) => {

	let deckTools = deckId ? (
		<div>
			<button><Link to={`/deck/${deckId}/new`}> New card </Link></button>
			<button><Link to={`/deck/${deckId}/study`}> Study deck </Link></button>

			<input onChange={e => onFilter(e.target.value)} type='search' placeholder='search'/>
		</div>
	) : null;
	
	return (
		<div className='toolbar'>
			<div>
				<button onClick={ showAddDeck }>New deck</button>
			</div>
			{deckTools}
		</div>
	);	
};

export default connect(null, mapDispatchToProps)(Toolbar);
