
import Container from "react-bootstrap/esm/Container";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const myToken =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYmR4Z3VxazAyN2kzcG55Nno2bTBtZmMifQ.tMJhZlbKAf53O4lJ82dzAA";
export default function BlogPage({ id, travelplcs }) {
 
  const location = travelplcs[id];
  // console.log(id);

  return (
    <>
      <div>
        <main className="container">
          <div className="p-4 p-md-5 mb-4">
            <div className="col-md-6 px-0">
              <h1 className="display-4 fst-italic">Blog Posts</h1>
              <h2>
                <i>{location.name} </i>
                The city: {location.city}
              </h2>
              <h3>Visited on {location.visitdate}</h3>
              <p className="lead my-3"></p>
            </div>
          </div>
          
          
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">
                    Explore
                  </strong>
                  <h3 className="mb-0">{location.country}</h3>
                  <div className="mb-1 text-muted">{location.visitdate}</div>
                  <p className="card-text mb-auto">Read about the country</p>
                  <a href="/blog/:{id}" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div
                    style={{ width: "400px", height: "300px" }}
                    className="float-center"
                  >
                    <Map
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                      mapStyle="mapbox://styles/mapbox/streets-v12"
                      mapboxAccessToken={myToken}
                      initialViewState={{
                        longitude: location.countryLongitude,
                        latitude: location.countryLatitude,
                        zoom: 1,
                      }}
                    >
                      <Marker
                        longitude={location.longitude}
                        latitude={location.latitude}
                        color="red"
                      />
                    </Map>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                    What's new?
                  </strong>
                  <h3 className="mb-0">{location.city}</h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="mb-auto">Read about the location!</p>
                  <a href="/" className="stretched-link">
                    Continue reading
                  </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div
                    style={{ width: "400px", height: "300px" }}
                    className="float-center"
                  >
                    <Map
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                      mapStyle="mapbox://styles/mapbox/streets-v12"
                      mapboxAccessToken={myToken}
                      initialViewState={{
                        longitude: location.longitude,
                        latitude: location.latitude,
                        zoom: 9,
                      }}
                    >
                      <Marker
                        longitude={location.longitude}
                        latitude={location.latitude}
                        color="red"
                      />
                    </Map>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-8">
              <h3 className="pb-4 mb-4 fst-italic border-bottom">
                {location.country}
              </h3>

              <article className="blog-post">
                <h2 className="blog-post-title mb-1">Sample blog post</h2>
                <p className="blog-post-meta">
                  January 1, 2021 by <a href="/about">{location.author}</a>
                </p>

                <p>
                  This blog post shows a few different types of content that’s
                  supported and styled with Bootstrap. Basic typography, lists,
                  tables, images, code, and more are all supported as expected.
                </p>

                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
                <h2>Blockquotes</h2>
                <p>This is an example blockquote in action:</p>
                <blockquote className="blockquote">
                  <p>Quoted text goes here.</p>
                </blockquote>
              
                <h2>Inline HTML elements</h2>

                <p>
                  Most of these elements are styled by browsers with few
                  modifications on our part.
                </p>
                <h2>Heading</h2>
                <p>
                  This is some additional paragraph placeholder content. It has
                  been written to fill the available space and show how a longer
                  snippet of text affects the surrounding content. We'll repeat
                  it often to keep the demonstration flowing, so be on the
                  lookout for this exact same string of text.
                </p>
              </article>
            </div>

            <div className="col-md-4">
              <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-4 mb-3 bg-light rounded">
                  <h4 className="fst-italic">Guest Author: Random Someone</h4>
                  <Container className="my-5 d-flex justify-content-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                      className="rounded-3"
                      style={{ width: "150px" }}
                      alt="Avatar"
                    />
                  </Container>
                  <p className="mb-0">
                    Customize this section to tell your visitors a little bit
                    about your publication, writers, content, or something else
                    entirely. Totally up to you.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
