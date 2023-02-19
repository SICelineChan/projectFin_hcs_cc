import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useImmer } from "use-immer";
import AddToDo from "./AddToDo";
import TaskList from "./TaskList";

let nextId = 4;
const initialToDos = [
  { id: 0, title: "Buy noodles", done: true },
  { id: 1, title: "Cook noodles", done: false },
  { id: 2, title: "Take pictures of noodles", done: false },
  { id: 3, title: "Eat noodles", done: false },
];

export default function About() {
  const [ToDos, UpdateToDos] = useImmer(initialToDos);

  function handleAddTodo(title) {
    UpdateToDos((draft) => {
      draft.push({
        id: nextId++,
        title: title,
        done: false,
      });
    });
  }

  function handleChangeTodo(nextTodo) {
    UpdateToDos(
      ToDos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    UpdateToDos(ToDos.filter((t) => t.id !== todoId));
  }
  return (
    <>
      <Container>
        <div className="nav-scroller py-1 mb-2">
          <div className="d-flex gap-2 justify-content-md-center"></div>
        </div>
      </Container>
      <Container>
        <h2>Add Your Noodle Tasks!</h2>
        <Row>
          <Col sm={3}>
            <AddToDo onAddTodo={handleAddTodo} />
          </Col>
          <Col sm={9}>
            <TaskList
              todos={ToDos}
              onChangeTodo={handleChangeTodo}
              onDeleteTodo={handleDeleteTodo}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
