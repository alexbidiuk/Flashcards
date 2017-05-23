import { combineReducers } from 'redux';
import { cardsReducer as cards} from "./reducers/cardsReducer.js";
import { cardFilterReducer as cardFilter} from "./reducers/cardFilterReducer.js";
import { showBackReducer as showBack} from "./reducers/showBackReducer.js";
import { decksReducer as decks} from "./reducers/decksReducer.js";
import { addingDeckReducer as addingDeck} from "./reducers/addingDeckReducer.js";
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({ cards, cardFilter, showBack, decks, addingDeck, routing: routerReducer });


export default rootReducer;

