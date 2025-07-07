import React from "react";
import { useDispatch } from "react-redux";
import TodoList from "./component/TodoList";
import { fetchTodos } from "./actions";
import "./styles.css";
import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  function handleUserInput(e) {
    setTask(e.target.value);
  }

  async function postRequest() {
    const response = await fetch("http://localhost:9091/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });

    if (response.ok) {
      dispatch(fetchTodos());
      setTask("");
    }

    return response;
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
