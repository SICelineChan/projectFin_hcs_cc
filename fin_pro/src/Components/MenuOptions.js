import React from "react";
import Button from "react-bootstrap/Button";

export default function MenuOptions({ text, onClick }) {
  return (
    <Button onClick={onClick} size="lg" variant="link">
      {text}
    </Button>
  );
}
