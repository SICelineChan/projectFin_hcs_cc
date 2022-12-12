import React from "react";
import { Link } from "wouter";

import MenuOptions from "./MenuOptions";

export default function SideBarMenu({ menu }) {
  return (
    <div>
      {menu.map((item, index) => (
        <Link key={index} href={item.aim}>
          <MenuOptions key={item.text} text={item.text} aim={item.aim} />
        </Link>
      ))}
    </div>
  );
}
