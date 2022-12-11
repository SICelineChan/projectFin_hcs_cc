import React from "react";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";

export default function HeadHome() {
  // const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <body
        className="d-flex h-100 text-center text-bg-dark"
        style={{
          backgroundImage: "url(/Images/Mex.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
            <h1>Eat Noodles!</h1>
            <p className="lead">and Travel!</p>
            <p className="lead">
              <Button variant="outline-light" href="/dashboard">
                Let's Roll!
              </Button>
              {/* <a
                href="/dashboard"
                className="btn btn-lg btn-secondary fw-bold border-white bg-white"
              ></a> */}
            </p>
          </main>
        </div>
      </body>
      <Footer></Footer>
    </>
  );
}
