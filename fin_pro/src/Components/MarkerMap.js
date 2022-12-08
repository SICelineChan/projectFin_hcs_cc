import React from "react";
import Map, { Marker } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const myToken =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYmR4Z3VxazAyN2kzcG55Nno2bTBtZmMifQ.tMJhZlbKAf53O4lJ82dzAA";

export default function MarkerMap() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ position: "relative", width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={myToken}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  );
}
