import { combineReducers } from 'redux';
import { cardsReducer as cards} from "./reducers/cardsReducer.js";
import { decksReducer as decks} from "./reducers/decksReducer.js";
import { addingDeckReducer as addingDeck} from "./reducers/addingDeckReducer.js";
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({ cards, decks, addingDeck, routing: routerReducer });


export default rootReducer;

