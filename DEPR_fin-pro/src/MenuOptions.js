import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";

export default function MenuOptions({ text, onClick }) {
  return (
    <div>
      <MDBBtn onClick={onClick} color="link" rippleColor="dark">
        {text}
      </MDBBtn>
    </div>
  );
}
