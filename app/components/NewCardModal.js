import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { store } from '../stores/store';


import { addCard } from '../actions/cards.js';
import CardModal from './CardModal.js';

const mapStateToProps = (props, { params: { deckId } } ) => ({
    card: { deckId }
});

const mapDispatchToProps = dispatch => ({
    onSave: card => store.dispatch(addCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);