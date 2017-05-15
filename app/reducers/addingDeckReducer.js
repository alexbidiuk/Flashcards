
import { SHOW_ADD_DECK } from '../constants/action-types.js';
import { HIDE_ADD_DECK } from '../constants/action-types.js';

export  const addingDeckReducer = (state, action) => {
	switch(action.type) {

      	case SHOW_ADD_DECK: return true;

      	case HIDE_ADD_DECK: return false;
	}

	return !!state;

} 