import React from "react";
import TodoList from "./component/TodoList";
import "./styles.css";
import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");

  function handleUserInput(e) {
    return setTask(e.target.value);
  }

  async function postRequest() {
    return await fetch("http://localhost:9091/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });
  }

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoList />
      <input onChange={handleUserInput} value={task}></input>
      <button type="submit" onClick={postRequest}>
        Add task
      </button>
    </div>
  );
}
