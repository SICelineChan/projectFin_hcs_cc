import React from "react";

export default function ContactPage() {
  return (
    <>
      <main>
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="/Images/noodleNoBG.png"
            alt="my noodle logo"
            width="170px"
            height="100px"
          />
          <h2 className="display-5 fw-bold">
            Contact <span className="text-muted"> Information</span>
          </h2>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              <p className="lead">
                This is the final project for the full stack course at the
                Hamburg Coding School.
              </p>
              <h2>Address:</h2>
              <p>HCS Hamburg Coding School GmbH Borselstraße 7 22765 Hamburg</p>
              <h3>Website:</h3>
              <a target="_new" href={`https://hamburgcodingschool.com`}>
                Hamburg Coding School
              </a>
              <br></br>
              <h2>Geschäftsführer:</h2>
              <p>Teresa Holfeld</p>
            </p>
            <br></br>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Email Us!
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Visit Us!
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
