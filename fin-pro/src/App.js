import React from "react";
import "./App.css";
import Main from "./Main";
// import PlaceCards from "./PlaceCards";
// import TopMenu from "./TopMenu";
// import MenuOptions from "./MenuOptions";
// import SideBarMenu from "./SideBarMenu";
// import TopMenu from "./TopMenu";
import { Route } from "wouter";
import Dashboard from "./Dashboard";

function App() {
  // const menu = [
  //   { text: "Home", aim: "home" },
  //   { text: "Locations", aim: "locations" },
  //   { text: "About Me", aim: "about" },
  //   { text: "Contact", aim: "contact" },
  // ];
  return (
    <div>
      {/* <Link href="/home">Home</Link> */}
      <Route path="/home" component={Main}></Route>

      <Route path="/dashboard" component={Dashboard}></Route>

      {/* <div className="d-flex flex-column">
        <TopMenu title="Eat Noodles Go Travel!"></TopMenu>
        <SideBarMenu menu={menu} />
      </div> */}
      {/* <Main></Main>
      <PlaceCards></PlaceCards>
       */}
    </div>
  );
}

export default App;
