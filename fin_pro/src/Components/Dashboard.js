import React from "react";

import SideBarMenu from "./SideBarMenu";
import PlaceCards from "./PlaceCards";
import travelplcs from "./travelplcs.json";
import Container from "react-bootstrap/Container";
import DashMaps from "./DashMaps";
import FetchMexicoApi from "./FetchMexicoApi";

export default function Dashboard() {
  const menu = [
    { text: "Home", aim: "home" },
    { text: "Locations", aim: "locations" },
    { text: "Dashboard", aim: "dashboard" },
    { text: "About Me", aim: "about" },
    { text: "Contact", aim: "contact" },
  ];

  return (
    <body>
      <Container>
        <div className="nav-scroller py-1 mb-2">
          <nav className="d-flex gap-2 justify-content-md-center">
            <SideBarMenu className="py-2" menu={menu} />
          </nav>
        </div>
      </Container>

      <main className="container">
        <div
          className="p-4 p-md-5 mb-4 rounded "
          style={{ backgroundColor: "#975C8D" }}
        >
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Dashboard</h1>
            <p className="lead my-3">
              a quick list of countries and markers on the map!{" "}
            </p>
          </div>
        </div>

        <div className="row mb-2 justify-content-center">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h1>
                  <strong className="d-inline-block mb-2 text-primary">
                    The Locations
                  </strong>
                </h1>
                <h3 className="mb-0">Visited Places</h3>
                <div className="mb-1 text-muted">
                  And the date that we were there!
                </div>
                {travelplcs.map((places) => (
                  <PlaceCards
                    key={places.id}
                    id={places.id}
                    country={places.country}
                    city={places.city}
                    visitdate={places.visitdate}
                    imageUrl={places.imageUrl}
                  />
                ))}
              </div>
              <div className="col-auto mx-auto">
                <p className="fst-italic mb-4">More blogs to follows...</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center justify-content-center">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-6 mb-6 bg-light rounded justify-content-center">
                <h2>
                  <strong className="d-inline-block mb-2 text-success">
                    Maps
                  </strong>
                </h2>
                <DashMaps></DashMaps>
                <br></br>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit
                  about your publication, writers, content, or something else
                  entirely. Totally up to you.
                </p>
              </div>

              <div className="p-4 justify-content-center align-content-center">
                <strong className="d-inline-block mb-2 text-success">
                  <h3 className="mb-0">Featured Country </h3>
                </strong>
                <FetchMexicoApi></FetchMexicoApi>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="/">GitHub</a>
                  </li>
                  <li>
                    <a href="/">Twitter</a>
                  </li>
                  <li>
                    <a href="/">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          {/* '' */}
        </div>
      </main>
    </body>
  );
}
