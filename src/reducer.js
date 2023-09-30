// store.js
import { combineReducers } from 'redux';
import { themeReducer } from './reducers/themeReducer';
import { todoReducer } from './reducers/todoReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  todoReducer: todoReducer,
});

export default rootReducer;
