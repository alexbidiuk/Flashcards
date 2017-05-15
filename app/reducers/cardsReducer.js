import { ADD_CARD } from '../constants/action-types.js';


export  const cardsReducer = (cards = [], action) => {
	switch(action.type) {
		case ADD_CARD: 
			let newCard = Object.assign({}, action.payload, {
        		score: 1,
        		id: +new Date
      		});

      		return cards.concat([ newCard ]);
	}

	return cards;

} 