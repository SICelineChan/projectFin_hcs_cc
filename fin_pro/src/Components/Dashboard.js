import React from "react";
import Footer from "./Footer";

import SideBarMenu from "./SideBarMenu";
import TopMenu from "./TopMenu";

export default function Dashboard() {
  const menu = [
    { text: "Home", aim: "home" },
    { text: "Locations", aim: "locations" },
    { text: "Dashboard", aim: "dashboard" },
    { text: "About Me", aim: "about" },
    { text: "Contact", aim: "contact" },
    { text: "Map", aim: "map" },
  ];
  return (
    <div>
      <div className="d-flex flex-column">
        <TopMenu title="Eat Noodles Go Travel!"></TopMenu>
        <SideBarMenu menu={menu} />
        <Footer></Footer>
      </div>
    </div>
  );
}
