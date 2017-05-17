import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { store } from '../stores/store';

import { updateCard, deleteCard } from '../actions/cards.js';
import CardModal from './CardModal.js';

const mapStateToProps = ( { cards }, { params: { cardId } } ) => ({ 
	card: cards.filter(card => card.id === parseInt(cardId, 10)).shift()
});

const mapDispatchToProps = dispatch => ({
    onSave: card => store.dispatch(updateCard(card)),
    onDelete: cardId => store.dispatch(deleteCard(cardId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);