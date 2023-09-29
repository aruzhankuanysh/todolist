// TodoForm.js

import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.trim() !== '') {
      addTodo(todoTitle);
      setTodoTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Добавить задачу"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default TodoForm;
