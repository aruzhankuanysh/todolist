//TodoList
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, removeTodo, toggleTodo } from '../../actions/todoActions';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos); // Получение списка задач из Redux-хранилища
    console.log('1',todos)
  const [editingTodo, setEditingTodo] = useState(null); // Состояние для отслеживания редактируемой задачи
  const [editedText, setEditedText] = useState('');

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setEditedText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== '') {
      dispatch(editTodo({ ...editingTodo, text: editedText }));
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
  };

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
                  {todo.text}
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

