import React from "react";

// import SideBarMenu from "./SideBarMenu";
import PlaceCards from "./PlaceCards";
import travelplcs from "./travelplcs.json";
import DashMaps from "./DashMaps";
import FetchMexicoApi from "./FetchMexicoApi";

export default function Dashboard() {

  return (
    <body>
      <main className="container-size">
        <div
          className="p-0 py-3 dashboard-header rounded "
        >
          <div className="p-2">
            <h1 className="display-4 fst-italic text-center">Dashboard</h1>
            <p className="lead my-3 fst-italic text-center">
              Here you will find a list of all the blogs for each country and city that we visit.
            </p>
          </div>
        </div>

        <div className="row mb-2 justify-content-center">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static container-size">
                <h2 className="d-inline-block mb-2">
                    Location and Blog Index</h2>
                <h4 className="mb-0">Visited Places</h4>
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

          <div className="col-md-6 text-center justify-content-center container-size">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="p-6 mb-6 bg-light rounded justify-content-center">
                <h2
                   className="d-inline-block mb-2">
                    Maps
                 
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
