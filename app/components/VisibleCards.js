import React from 'react';
import Card from './Card.js';
import { connect } from 'react-redux';
import fuzzysearch from 'fuzzysearch';

const matches = (filter, card) => 
	fuzzysearch(filter, card.front) ||
	fuzzysearch(filter, card.back);

const mapStateToProps = ( { cards, cardFilter }, { params: { deckId } } ) => ({
    cards: cards.filter(card => card.deckId === deckId && matches(cardFilter, card))
});

const Cards = ({ cards, children }) => {
	return (
		<div className='main'>
			{cards.map(card => <Card card={card} key={card.id} />)}
			<div>{children}</div>
		</div>);
};

export default connect(mapStateToProps)(Cards);