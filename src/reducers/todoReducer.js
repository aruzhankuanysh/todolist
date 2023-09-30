//todoReducer
const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODO":
      return {
        ...state,
        todos: action.payload
      };
    case "ADD_TODO":
      const newTodo = {
        ...action.payload,
        createdAt: new Date(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...action.payload, createdAt: todo.createdAt }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload), 
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};
