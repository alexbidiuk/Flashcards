// import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../root.js';

export const store = createStore(rootReducer);