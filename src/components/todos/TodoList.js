//TodoList
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../../actions/todoActions";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Todo.css";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log("todos:", todos);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setEditedText(todo.title);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== "") {
      dispatch(editTodo({ ...editingTodo, title: editedText }));
      setEditingTodo(null);
      setEditedText("");
    }
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
    setEditedText("");
  };

  const handleDelete = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const handleToggle = (todoId) => {
    dispatch(toggleTodo(todoId));
    console.log("togg");
  };

  if (todos === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <FormGroup flex key={todo.id}>
          {editingTodo === todo ? (
            <div className="todo">
              <TextField
                variant="standard"
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <div>
                <Button onClick={handleSaveEdit}>Сохранить</Button>
                <Button onClick={handleCancelEdit}>Отмена</Button>
              </div>
            </div>
          ) : (
            <div className={`${todo.completed ? "completed" : ""} todo`}>
              <FormControlLabel
                
                control={
                  <Checkbox
                    onClick={() => handleToggle(todo.id)}
                    checked={todo.completed}
                  />
                }
                label={todo.title}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <div>
                <Button onClick={() => handleEdit(todo)}>
                  <ModeIcon />
                </Button>
                <Button onClick={() => handleDelete(todo.id)}>
                  <DeleteIcon />
                </Button>
              </div>
            </div>
          )}
        </FormGroup>
      ))}
      {/* <ul>
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
                  className={todo.completed ? "completed" : ""}
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
      </ul> */}
    </>
  );
}

export default TodoList;
