import { RECEIVE_DATA } from '../constants/action-types.js';

export const receiveData = data => ({ type: RECEIVE_DATA, payload: data });

export const fetchData = () => {
	return dispatch => {
		fetch('/api/data')
			.then(res => res.json())
			.then(json => dispatch(receiveData(json)));
	};
};
