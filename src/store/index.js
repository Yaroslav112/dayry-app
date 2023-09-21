import { createStore, combineReducers } from 'redux';
import itemsReducer from './items/reducers';

const rootReducer = combineReducers({
    items: itemsReducer,
});

const store = createStore(rootReducer);

export default store;
