// TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

function TodoForm() {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.trim() !== '') {
      dispatch(addTodo({ text: todoTitle, completed: false }));
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

