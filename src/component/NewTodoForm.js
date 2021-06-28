import React, { useState } from "react";
import uuid from "react-uuid";
import { Button, TextField } from "@material-ui/core";

const NewTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ id: "", task: "", completed: false });

  const inputTaskHandler = (event) => {
    setTodo({ ...todo, task: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      // actualiza e limpa
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <TextField
        name="task"
        type="text"
        value={todo.task}
        onChange={inputTaskHandler}
      ></TextField>
      <Button type="submit">OK</Button>
    </form>
  );
};

export default NewTodoForm;
