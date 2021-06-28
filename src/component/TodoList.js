import Todo from "./Todo";
import { List } from "@material-ui/core";

const Todolist = ({ todos, completeToggle, removeTodo }) => {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          completeToggle={completeToggle}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
};

export default Todolist;
