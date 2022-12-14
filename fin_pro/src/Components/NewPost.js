import React from "react";

import Form from "react-bootstrap/Form";

export default function NewPost() {
  return (
    <>
      <div className="container bg-light">
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="/Images/noodleNoBG.png"
            alt="something"
            width="150px"
            height="100px"
          />
          <h2>Create a new post</h2>
          <h3 className="lead text-muted">
            Below is an example layout - This form is currently under
            construction! Will figure out the useState for adding new post and
            date later!
          </h3>
        </div>

        <div className="col-md col-lg">
          <h4 className="mb-3">Fill out some info</h4>

          <div className="row g-3">
            <div className="col-sm-6">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />

              <div className="invalid-feedback">
                Valid username is required.
              </div>
            </div>

            <div className="col-sm-6">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />

              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-6">
              <Form.Label>Userame</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />

              <div className="invalid-feedback">Your username is required.</div>
            </div>
          </div>
          <br></br>
          <div className="row g-3">
            <div className="col-sm-6">
              <Form.Label>Country</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />

              <div className="invalid-feedback">
                Valid username is required.
              </div>
            </div>

            <div className="col-sm-6">
              <Form.Label>City</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />

              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-6">
              <Form.Label>Write your text</Form.Label>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Write your text"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
