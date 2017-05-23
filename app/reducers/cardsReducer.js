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
          console.log(cards);
      		return cards.map(card => {
      			if (card.id === updateCard.id) { 
              return  Object.assign({}, card, updateCard) } 
            else {
             return card 
            };
      		});

      	case DELETE_CARD: 

      		let deleteCard = action.payload;
      		return cards.filter(card => card.id != deleteCard);
	}

	return cards;

} 