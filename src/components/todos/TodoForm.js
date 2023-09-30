// TodoForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/todoActions";
import {
  FormGroup,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

function TodoForm() {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(todoTitle){
      const newTodo = {
        id: Date.now(),
        title: todoTitle,
        completed: false,
      };
  
      dispatch(addTodo(newTodo));
      setTodoTitle("");
    }
  };

  return (
    <FormGroup onSubmit={handleAddTodo}>
      <Paper
        component="form"
        sx={{ display: "flex", justifyContent:'space-between', alignItems: "center", marginBottom: "20px" }}
      >
        <TextField
          id="outlined-basic"
          label="Новая задача"
          variant="outlined"
          sx={{width:"90%"}}
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <IconButton
          type="submit"
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
        >
          <AddIcon />
        </IconButton>
      </Paper>
    </FormGroup>
  );
}

export default TodoForm;
