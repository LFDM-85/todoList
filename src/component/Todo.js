import { IconButton, ListItem, Typography } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = ({ todo, completeToggle, removeTodo }) => {
  const checkHandler = () => {
    completeToggle(todo.id);
  };

  const removeHandler = () => {
    removeTodo(todo.id);
  };

  return (
    <ListItem className="task">
      <CheckBox checked={todo.completed} onClick={checkHandler} />
      <Typography
        variant="body1"
        style={{ textDecoration: todo.completed ? "line-through" : null }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={removeHandler}>
        <DeleteIcon fontSize="medium" />
      </IconButton>
    </ListItem>
  );
};
export default Todo;
