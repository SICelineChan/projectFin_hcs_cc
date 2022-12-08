import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
