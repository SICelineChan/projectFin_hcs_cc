import React, { useState } from "react";

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

export default function TopMenu({ title }) {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">{title}</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/home">
                {title}
              </MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/dashboard">
                Dashboard
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Locations
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Deck of Places</MDBDropdownItem>
                  <MDBDropdownItem link href="/map">
                    Maps
                  </MDBDropdownItem>
                  <MDBDropdownItem link>New Post</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
