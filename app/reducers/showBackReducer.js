import { SHOW_BACK_CARD } from '../constants/action-types.js';


export  const showBackReducer = (state, action) => {
	switch(action.type) {
		case SHOW_BACK_CARD: 
			return action.payload || false;
	}

	return state || false;

};