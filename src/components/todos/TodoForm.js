// TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

function TodoForm() {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    };
    console.log('step1')

    dispatch(addTodo(newTodo)); 
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
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

