import React from "react";
import "./CSS/App.css";
import Main from "./Components/Main";

// import PlaceCards from "./PlaceCards";
// import TopMenu from "./TopMenu";
// import MenuOptions from "./MenuOptions";
// import SideBarMenu from "./SideBarMenu";
// import TopMenu from "./TopMenu";
import { Route } from "wouter";
import Dashboard from "./Components/Dashboard";
import MapTest from "./Components/MapTest";

function App() {
  return (
    <div>
      {/* <Link href="/home">Home</Link> */}
      <Route path="/home" component={Main}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/map" component={MapTest}></Route>
    </div>
  );
}

export default App;
