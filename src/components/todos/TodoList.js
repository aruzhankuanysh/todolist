//TodoList
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo, toggleTodo } from '../../actions/todoActions';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log('todos:', todos);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setEditedText(todo.title);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== '') {
      dispatch(editTodo({ ...editingTodo, title: editedText }));
      setEditingTodo(null);
      setEditedText('');
    }
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
    setEditedText('');
  };

  const handleDelete = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleToggle = (todoId) => {
    dispatch(toggleTodo(todoId));
    console.log('togg')
  };

  if (todos === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Список задач</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo === todo ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Сохранить</button>
                <button onClick={handleCancelEdit}>Отмена</button>
              </>
            ) : (
              <>
                <span
                  className={todo.completed ? 'completed' : ''}
                  onClick={() => handleToggle(todo.id)}
                >
                  {todo.title}
                </span>
                <button onClick={() => handleEdit(todo)}>Редактировать</button>
                <button onClick={() => handleDelete(todo.id)}>Удалить</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

