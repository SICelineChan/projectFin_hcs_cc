import React from "react";
import "./CSS/App.css";
import HeadHome from "./Components/HeadHome";

import { Switch, Route } from "wouter";
import Dashboard from "./Components/Dashboard";

import TopMenu from "./Components/TopMenu";
import ContactPage from "./Components/ContactPage";
import MultiMarker from "./Components/MultiMarker";
import About from "./Components/About";
import Footer from "./Components/Footer";
import travelplcs from "./Components/travelplcs.json";
import NextBlog from "./Components/NextBlog";
import SignInPage from "./Components/SignInPage";
import NewPost from "./Components/NewPost";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <TopMenu title="Eat Noodles Go Travel!"></TopMenu>

      <Switch>
        <Route path="/home" component={HeadHome}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/locations" component={MultiMarker}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/newpost" component={NewPost}></Route>
        <Route path="/signin" component={SignInPage}></Route>
        <Route path="/blog" component={NextBlog}></Route>

        <Route path="/blog/:id">
          {(params) => <NextBlog id={params.id - 1} travelplcs={travelplcs} />}
        </Route>

        <Route>
          <HeadHome />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
