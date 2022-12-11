import React from "react";
import "./CSS/App.css";
import HeadHome from "./Components/HeadHome";

import { Switch, Route } from "wouter";
import Dashboard from "./Components/Dashboard";

import TopMenu from "./Components/TopMenu";
import FetchMexicoApi from "./Components/FetchMexicoApi";
import MarkerMap from "./Components/MarkerMap";
import MultiMarker from "./Components/MultiMarker";
import About from "./Components/About";
import Footer from "./Components/Footer";
// import BlogPage from "./Components/BlogPage";
import NextBlog from "./Components/NextBlog";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TopMenu title="Eat Noodles Go Travel!"></TopMenu>

      <Switch>
        <Route path="/home" component={HeadHome}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/locations" component={MultiMarker}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/multi" component={MarkerMap}></Route>
        <Route path="/blog" component={NextBlog}></Route>

        <Route path="/blog/:id">
          {(params) => <NextBlog Id={params.id} />}
        </Route>

        <Route path="/mexico" component={FetchMexicoApi}></Route>
        {/* {(params) => <Blogpost use .findIndex id={params.id} />} */}

        <Route>
          <HeadHome />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
