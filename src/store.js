// store.js
import { createStore, combineReducers } from 'redux';
import { themeReducer } from './reducers/themeReducer';
import { todoReducer } from './reducers/todoReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  todoReducer: todoReducer,
});

const store = createStore(rootReducer);

export default store;
