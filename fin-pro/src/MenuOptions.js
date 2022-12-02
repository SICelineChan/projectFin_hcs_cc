import { MDBBtn } from "mdb-react-ui-kit";

export default function MenuOptions({ text, onClick }) {
  return (
    <div className="d-flex ">
      <MDBBtn onClick={onClick} color="link" rippleColor="dark">
        {text}
      </MDBBtn>
    </div>
  );
}
