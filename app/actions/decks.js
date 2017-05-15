
import { store } from '../stores/store';
import { ADD_DECK, SHOW_ADD_DECK, HIDE_ADD_DECK } from '../constants/action-types.js';

export const addDeck = (name) => ( {type: ADD_DECK, payload: name} );

export const showAddDeck = () => ( {type: SHOW_ADD_DECK} );

export const hideAddDeck = () => ( {type: HIDE_ADD_DECK} );


