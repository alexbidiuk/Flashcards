import { ADD_DECK } from '../constants/action-types.js';
import { SHOW_ADD_DECK } from '../constants/action-types.js';
import { HIDE_ADD_DECK } from '../constants/action-types.js';

export const decksReducer = (decks = [], action) => {
    switch (action.type) {
        case ADD_DECK:
            let newDeck = {
                name: action.payload,
                id: +new Date
            };

            return decks.concat([newDeck]);
    }
    
    return decks;

}