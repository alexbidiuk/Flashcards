import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { store } from '../stores/store';


import { addDeck, showAddDeck, hideAddDeck } from '../actions/decks.js';

const mapStateToProps = ({ decks, addingDeck }) => ({
    decks,
    addingDeck
});


const mapDispatchToProps = dispatch => ({
    addDeck: name => store.dispatch(addDeck(name)),
    showAddDeck: () => store.dispatch(showAddDeck()),
    hideAddDeck: () => store.dispatch(hideAddDeck())
});

class Sidebar extends React.Component {
    constructor() {
    	super();
        this.createDeck = this.createDeck.bind(this);
    }
    componentDidUpdate() {
        var el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    }

    createDeck(e) {

        if (e.which !== 13) return;

        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();

    }

    render() {
        let { decks, addingDeck } = this.props;

        return ( 
        	<div className = 'sidebar'>
            	<h2> All decks </h2> 
            	<ul> 
            		{
                		decks.map((deck, i) => {
                    		return 	<li key = { i }>
                    					<Link to={`/deck/${deck.id}`}>{ deck.name }</Link>
                    		 		</li>
                		})
            		} 
            	</ul> 
            	{
	            	addingDeck && <input ref = 'add' onKeyPress = { this.createDeck } /> 
	        	} 
	         </div>
	     );

   	}
		
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
