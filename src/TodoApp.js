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


  function handleKeyPress(e) {
    if (e.key === "Enter") {
      postRequest();
    }
  }

  async function postRequest() {
    if (task === "") {
      alert("Please enter a task");
      return;
    }
    
    try {
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
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }


  return (
    <div className="todo-app">
      <div className="logo-section">
        <img
          src="https://www.iagloyalty.com/hubfs/raw_assets/public/IAGL/images/iagLoyalty-logo-150.svg"
          alt="IAG Loyalty Logo"
          title="IAG Loyalty Logo"
          className="logo"
        />
      </div>

      <h1 className="app-title">Todo List</h1>

      <TodoList />

      <div className="input-container">
        <input 
          onChange={handleUserInput} 
          onKeyDown={handleKeyPress}
          value={task} 
          placeholder="Enter a new task..." 
          className="task-input"
        />
        <button 
          type="submit" 
          onClick={postRequest}
          className="add-button"
          disabled={!task.trim()}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}


