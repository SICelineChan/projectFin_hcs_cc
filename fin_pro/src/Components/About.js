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
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="/Images/noodleNoBG.png"
            alt="my noodle logo"
            width="170px"
            height="100px"
          />
          <h2 className="display-5 fw-bold">
            About <span className="text-muted">...me</span>
          </h2>
          <p className="lead">
            Hey, glad you click here! I am Celine. This is the final project for
            the full stack course at Hamburg Coding School. Check out that
            steamy noodle pixel pic, I am super proud to draw that by mouse!
          </p>
          <h4 className="featurette-heading fw-normal lh-1">
            What about <span className="text-muted">...this photo?</span>
          </h4>
          <p className="lead">
            The best noodle breakfast! It has all the flavours, sweet, salty,
            sour and bitter (the coffee!)
          </p>

          <img
            src="./Images/noobfast.jpg"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="400"
            height="400"
            alt="rice noodle breakfast"
          />
        </div>
        <Container>
          <h2>Add Your Food Dream!</h2>
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
      </Container>
    </>
  );
}
