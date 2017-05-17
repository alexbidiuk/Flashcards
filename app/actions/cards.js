import { ADD_CARD, UPDATE_CARD, DELETE_CARD } from '../constants/action-types.js';

export const addCard = (card) => ( {type: ADD_CARD, payload: card} );

export const updateCard = (card) => ( {type: UPDATE_CARD, payload: card} );

export const deleteCard = (cardId) => ( {type: DELETE_CARD, payload: cardId} );


