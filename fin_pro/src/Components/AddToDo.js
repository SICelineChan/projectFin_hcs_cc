import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <div className="d-grid gap-4 d-md-flex justify-content-md-start">
        <input
          placeholder="Add Your Wishes"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Button
          variant="outline-info"
          onClick={() => {
            setTitle("");
            onAddTodo(title);
          }}
        >
          Add
        </Button>
      </div>
    </>
  );
}
