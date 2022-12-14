import React from "react";
import { FaFacebookF, FaGithub, FaGoogle, FaDiscord } from "react-icons/fa";

export default function Footer() {
  //   const footerMenu = [
  //     { id: 1, item: "GitHub", target: "/github" },
  //     { id: 2, item: "LinkIn", target: "/linkin" },
  //   ];
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a className="navbar-brand" href="/home">
            <img
              src="./Images/noodleNoBG.png"
              width="80px"
              height="55px"
              className="rounded"
              alt="logo"
            />
          </a>
          <span className="mb-3 mb-md-0 text-muted">© Celine C 2022</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="/">
              <FaGithub />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/">
              <FaFacebookF />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/">
              <FaGoogle />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="/">
              <FaDiscord />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
