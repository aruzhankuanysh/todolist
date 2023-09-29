//toodoActions
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: {
      id: generateId(), // Генерируем уникальный ID
      text: todo.text,
      completed: false,
    },
  });
  
  export const editTodo = (updatedTodo) => ({
    type: 'EDIT_TODO',
    payload: updatedTodo,
  });
  
  export const removeTodo = (todoId) => ({
    type: 'REMOVE_TODO',
    payload: todoId,
  });
  
  export const toggleTodo = (todoId) => ({
    type: 'TOGGLE_TODO',
    payload: todoId,
  });