import React, { useEffect, useState } from "react";
import TodoForm from "../components/todos/TodoForm";
import TodoList from "../components/todos/TodoList";

export default function Todos() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}
