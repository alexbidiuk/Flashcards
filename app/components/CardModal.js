import React from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';

class CardModal extends React.Component {
	constructor() {
		super();
		this.onSave = this.onSave.bind(this); 
	} 
	componentDidUpdate() {
 		ReactDOM.findDOMNode(this.refs.front).focus();
	}
	onSave(e) {
		var front = ReactDOM.findDOMNode(this.refs.front);
		var back = ReactDOM.findDOMNode(this.refs.back);

		this.props.onSave(object.assign({}, this.props.card, {front: front.value, back: back.value,}));

		browserHistory.push(`/deck/${this.props.card.deckId}`);
	}

	render() {
		let {card, onDelete} = this.props;

		return(
			<div className='modal'>
				<h1>{ onDelete ?  'Edit' : 'New'} Card</h1>
				<label> Card front </label>
				<textarea ref='front' defaultValue={card.front}></textarea>
				<label> Card back </label>
				<textarea ref='back' defaultValue={card.back}></textarea>
				<p>
					<button onClick={this.onSave}>Save card</button>
					<Link to={`/deck/${card.deckId}`}>Cancel</Link>
					{ onDelete ? 
						<button onClick={this.onDelete}>Delete card</button> :
						null
					}
				</p>
			</div>
		);
	}
};

export default CardModal;