//TodoList
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../../actions/todoActions";
import {
  Button,
  ButtonGroup,
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

  const [filter, setFilter] = useState("all");

  const filtered = todos.filter((todo) => {
    if (filter === "all") return true;
    return todo.completed === (filter === "completed");
  });

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
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button onClick={ () => setFilter('all')}>все</Button>
        <Button onClick={ () => setFilter("completed")}>Выполненые</Button>
        <Button onClick={ () => setFilter("uncompleted")}>Невыполненные</Button>
      </ButtonGroup>
      {filtered.map((todo) => (
        <FormGroup key={todo.id} style={{ flex: todo.flex }}>
          {editingTodo === todo ? (
            <div className="todo">
              <TextField
                sx={{ width: "70%" }}
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
    </>
  );
}

export default TodoList;
