import React from "react";
import Button from "react-bootstrap/Button";

export default function MenuOptions({ text, onClick }) {
  return (
    <div>
      <Button onClick={onClick} color="link" rippleColor="dark">
        {text}
      </Button>
    </div>
  );
}
