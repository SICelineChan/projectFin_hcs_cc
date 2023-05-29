import React from "react";
import Button from "react-bootstrap/Button";

export default function MainPage() {
  return (
    <>
      <body
        className="d-flex h-100 text-center text-bg-dark">
        <div className="mainpage-image">
        <div className="cover-container d-flex w-100 h-100 py-3 mx-auto flex-column">
          <main className="p-5">
            <h1>Are you travelling the world and in search of nooldes?</h1>
            <h3>A travelling and food blog</h3>
            <p className="lead">
              <Button variant="outline-light" href="/dashboard">
                Let's Roll!
              </Button>
            </p>
          </main>
        </div>
        </div>
      </body>
    </>
  );
}
