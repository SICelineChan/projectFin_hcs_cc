import React, { useState } from "react";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import Footer from "./Footer";

export default function Main() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <header>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage: "url('/Images/Madeira6Oct19.jpg')",
            marginTop: "16px",
            height: "600px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Eat Noodles! Go Travel</h1>
                <h4 className="mb-3">Find your Noodles</h4>
                <MDBBtn tag="a" outline size="lg">
                  Fulfill your noodle desire!
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Footer></Footer>
    </>
  );
}
