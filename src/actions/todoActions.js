// todoActions.js
import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getTodo = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${apiUrl}/todos`);
      const todos = response.data;
      dispatch({
        type: 'GET_TODO',
        payload: todos,
      });
    } catch (error) {
      dispatch({
        type: 'FAIL_REQUEST',
        payload: error.message,
      });
    }
  };
};

export const addTodo = (todo) => {
  return async (dispatch) => {
    try {
      await axios.post(`${apiUrl}/todos`, todo);
      dispatch({
        type: 'ADD_TODO',
        payload: todo,
      });
    } catch (error) {
      dispatch({
        type: 'FAIL_REQUEST',
        payload: error.message,
      });
    }
  };
};

export const editTodo = (updatedTodo) => {
  return async (dispatch) => {
    try {
      await axios.put(`${apiUrl}/todos/${updatedTodo.id}`, updatedTodo);
      dispatch({
        type: 'EDIT_TODO',
        payload: updatedTodo,
      });
    } catch (error) {
      dispatch({
        type: 'FAIL_REQUEST',
        payload: error.message,
      });
    }
  };
};

export const removeTodo = (todoId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${apiUrl}/todos/${todoId}`);
      dispatch({
        type: 'REMOVE_TODO',
        payload: todoId,
      });
    } catch (error) {
      dispatch({
        type: 'FAIL_REQUEST',
        payload: error.message,
      });
    }
  };
};

export const toggleTodo = (todoId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const todo = state.todoReducer.todos.find((t) => t.id === todoId);

      if (!todo) {
        throw new Error('Todo not found');
      }

      const updatedTodo = { ...todo, completed: !todo.completed };

      await axios.put(`${apiUrl}/todos/${todoId}`, updatedTodo);

      dispatch({
        type: 'TOGGLE_TODO',
        payload: todoId,
      });
    } catch (error) {
      dispatch({
        type: 'FAIL_REQUEST',
        payload: error.message,
      });
    }
  };
};
