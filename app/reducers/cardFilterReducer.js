import { FILTER_CARDS } from '../constants/action-types.js';


export  const cardFilterReducer = (state, action) => {
	switch(action.type) {
		case FILTER_CARDS: 
			return action.payload;
	}

	return state || '';

} 