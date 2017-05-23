// import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../root.js';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));