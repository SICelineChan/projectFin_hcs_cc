import React from "react";

import Footer from "./Footer";

export default function Main() {
  // const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <body
        className="d-flex h-100 text-center text-bg-dark"
        style={{
          backgroundImage: "url(/Images/Ire30Aug16_mod.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
            <h1>Cover your page.</h1>
            <p className="lead">
              Cover is a one-page template for building simple and beautiful
              home pages. Download, edit the text, and add your own fullscreen
              background photo to make it your own.
            </p>
            <p className="lead">
              <a
                href="/"
                className="btn btn-lg btn-secondary fw-bold border-white bg-white"
              >
                Learn more
              </a>
            </p>
          </main>
        </div>
      </body>
      <Footer></Footer>
    </>
  );
}
