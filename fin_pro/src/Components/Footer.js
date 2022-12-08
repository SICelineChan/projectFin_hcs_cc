import React from "react";

export default function Footer() {
  //   const footerMenu = [
  //     { id: 1, item: "GitHub", target: "/github" },
  //     { id: 2, item: "LinkIn", target: "/linkin" },
  //   ];
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/home" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© Celine C 2022 </p>
        <p className="text-center text-muted">
          A project at Hamburg Coding School{" "}
        </p>
      </footer>
    </div>
  );
}
