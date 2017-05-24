import { ADD_DECK, SHOW_ADD_DECK, HIDE_ADD_DECK, RECEIVE_DATA } from '../constants/action-types.js';

export const decksReducer = (decks = [], action) => {
    switch (action.type) {
    	case RECEIVE_DATA:
      		return action.payload.decks || decks;

        case ADD_DECK:
            let newDeck = {
                name: action.payload,
                id: +new Date
            };

            return decks.concat([newDeck]);
    }
    
    return decks;

}