import React from "react";
import Footer from "./Footer";
import SideBarMenu from "./SideBarMenu";
// import travelplcs from "./travelplcs.json";

export default function Dashboard() {
  //console.log(travelplcs);

  const menu = [
    { text: "Home", aim: "home" },
    { text: "Locations", aim: "locations" },
    { text: "Dashboard", aim: "dashboard" },
    { text: "About Me", aim: "about" },
    { text: "Contact", aim: "contact" },
    { text: "My homes", aim: "multi" },
    { text: "Mexico", aim: "mexico" },
  ];
  return (
    <div>
      <div classNameName="d-flex flex-column">
        <SideBarMenu menu={menu} />

        <Footer></Footer>
      </div>
    </div>
  );
}
