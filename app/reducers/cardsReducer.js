import { ADD_CARD, UPDATE_CARD, DELETE_CARD } from '../constants/action-types.js';


export  const cardsReducer = (cards = [], action) => {
	switch(action.type) {
		case ADD_CARD: 
			let newCard = Object.assign({}, action.payload, {
        		score: 1,
        		id: +new Date
      		});

      		return cards.concat([ newCard ]);
      		
      	case UPDATE_CARD: 

      		let updateCard = action.payload;
      		return cards.map(card => {
      			(card.id != updateCard.id) ? card :
      			Object.assign({}, card, updateCard);
      		});

      	case DELETE_CARD: 

      		let deleteCard = action.payload;
      		return cards.filter(card => card.id != deleteCard);
	}

	return cards;

} 