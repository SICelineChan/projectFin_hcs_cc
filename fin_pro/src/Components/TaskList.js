import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ListGroup as="ol" numbered>
      {todos.map((todo) => (
        <ListGroup.Item as="li" key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />

        <Button
          variant="outline-success"
          style={{ marginLeft: "15px" }}
          onClick={() => setIsEditing(false)}
        >
          Save
        </Button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}

        <Button
          variant="outline-dark"
          style={{ marginLeft: "15px" }}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}

      <Button
        variant="outline-danger"
        style={{ marginLeft: "15px" }}
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </Button>
    </label>
  );
}
