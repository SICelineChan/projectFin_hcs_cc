import React from "react";
import Footer from "./Footer";

import SideBarMenu from "./SideBarMenu";

export default function Dashboard() {
  const menu = [
    { text: "Home", aim: "home" },
    { text: "Locations", aim: "locations" },
    { text: "Dashboard", aim: "dashboard" },
    { text: "About Me", aim: "about" },
    { text: "Contact", aim: "contact" },
    { text: "Map", aim: "map" },

    { text: "Mexico", aim: "mexico" },
    { text: "Japan", aim: "japan" },
  ];
  return (
    <div>
      <div className="d-flex flex-column">
        <SideBarMenu menu={menu} />
        <Footer></Footer>
      </div>
    </div>
  );
}
