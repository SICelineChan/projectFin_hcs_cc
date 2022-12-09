import React from "react";
import Button from "react-bootstrap/Button";

export default function MenuOptions({ text, onClick }) {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-2">
      <Button onClick={onClick} color="link" rippleColor="dark">
        {text}
      </Button>
    </div>
  );
}
