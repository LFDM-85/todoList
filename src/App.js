import React, { useState, useEffect } from "react";

import "./App.css";
import Todolist from "./component/TodoList";
import NewTodoForm from "./component/NewTodoForm";
import Typography from "@material-ui/core/Typography";

const Storage_KEY = "todolist_tasks";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(Storage_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(Storage_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const completeToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Todo List
      </Typography>
      <NewTodoForm addTodo={addTodo} />
      <Todolist
        todos={todos}
        completeToggle={completeToggle}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
