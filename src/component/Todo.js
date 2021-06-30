import { IconButton, ListItem, Typography } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import CheckBoxBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

const Todo = ({ todo, completeToggle, removeTodo }) => {
  const checkHandler = () => {
    completeToggle(todo.id);
  };

  const removeHandler = () => {
    removeTodo(todo.id);
  };

  return (
    <ListItem className="task">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={6} sm={3}>
          {!todo.completed ? (
            <CheckBoxBlankIcon onClick={checkHandler} />
          ) : (
            <CheckBox checked={todo.completed} onClick={checkHandler} />
          )}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body1"
            style={{ textDecoration: todo.completed ? "line-through" : null }}
          >
            {todo.task}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <IconButton onClick={removeHandler}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};
export default Todo;
