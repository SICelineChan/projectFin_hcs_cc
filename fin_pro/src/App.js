import React from "react";
import "./CSS/App.css";
import Main from "./Components/Main";

import { Switch, Route } from "wouter";
import Dashboard from "./Components/Dashboard";
import MapTest from "./Components/MapTest";
import TopMenu from "./Components/TopMenu";
import FetchMexicoApi from "./Components/FetchMexicoApi";
import MarkerMap from "./Components/MarkerMap";

function App() {
  return (
    <div>
      <TopMenu title="Eat Noodles Go Travel!"></TopMenu>
      <Switch>
        <Route path="/home" component={Main}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/map" component={MapTest}></Route>
        <Route path="/locations" component={MarkerMap}></Route>

        <Route path="/mexico" component={FetchMexicoApi}></Route>
        <Route path="/mexico/:id">
          {(params) => <FetchMexicoApi id={params.id} />}
        </Route>
        <Route>
          <MarkerMap />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
