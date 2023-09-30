//toodoActions
import axios from "axios"

export const makeRequest = () => {
  return {
    type: "MAKE_REQUEST",
  };
};
export const failRequest = (err) => {
  return {
    type: "FAIL_REQUEST",
    payload: err,
  };
};

export const getTodo = (todo) => ({
  type: "GET_TODO",
  payload: todo,
});

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const editTodo = (updatedTodo) => ({
  type: "EDIT_TODO",
  payload: updatedTodo,
});

export const removeTodo = (todoId) => ({
  type: "REMOVE_TODO",
  payload: todoId,
});

export const toggleTodo = (todoId) => ({
  type: "TOGGLE_TODO",
  payload: todoId,
});

export const FetchTodoList = () => {
  return (dispatch) => {
    dispatch(makeRequest());
    //setTimeout(() => {
    axios
      .get("https://my-json-server.typicode.com/aruzhankuanysh/todos/todos")
      .then((res) => {
        const todolist = res.data;
        dispatch(getTodo(todolist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
    // }, 2000);
  };
};
