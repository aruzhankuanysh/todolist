//TodosPage
import React, { useEffect, useState } from "react";
import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";
import { Container } from "@mui/material";

export default function Todos() {
  return (
    <>
      <Container>
        <h1>Список задач</h1>
        <TodoForm />
        <TodoList />
      </Container>
    </>
  );
}
