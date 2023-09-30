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
  Grid,
  TextField,
} from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import "./Todo.css";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log("todos:", todos);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  const [filter, setFilter] = useState("all");

  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const sortByCriteria = (a, b) => {
    if (sortBy === "date") {
      if (sortOrder === "asc") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    } else if (sortBy === "title") {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    }
  };

  const filtered = todos
    .filter((todo) => {
      if (filter === "all") return true;
      return todo.completed === (filter === "completed");
    })
    .sort(sortByCriteria);

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
      <Grid container direction="row" justifyContent="space-between">
        <Grid xs={7}>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={() => setFilter("all")}>все</Button>
            <Button onClick={() => setFilter("completed")}>Выполненые</Button>
            <Button onClick={() => setFilter("uncompleted")}>Невыполненные</Button>
          </ButtonGroup>
        </Grid>
        <Grid xs="auto">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              onClick={() => {
                setSortBy("title");
                toggleSortOrder();
              }}
            >
              <SwapVertIcon />
              По названию
            </Button>
            <Button
              onClick={() => {
                setSortBy("date");
                toggleSortOrder();
              }}
            >
              <SwapVertIcon />
              По дате
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
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
              <div className="todo_buttons">
                <div className="todo_date">
                  <h6>Создано: {new Date(todo.createdAt).toLocaleString()}</h6>
                </div>
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
