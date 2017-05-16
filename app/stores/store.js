// import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../root.js';
import * as localStore from '../localStorage.js';

export const store = createStore(rootReducer, localStore.get());