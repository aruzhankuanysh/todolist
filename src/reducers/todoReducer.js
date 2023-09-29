//todoReducer
const initialState = {
  todos: [], // Изначально список задач пустой
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload], // Добавляем новую задачу в список
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ), // Обновляем задачу по ID
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload), // Удаляем задачу по ID
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed } // Инвертируем состояние выполнения задачи
            : todo
        ),
      };
    default:
      return state;
  }
};
