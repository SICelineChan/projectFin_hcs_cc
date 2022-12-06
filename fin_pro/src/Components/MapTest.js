import React, { useRef, useEffect, useState } from "react";
// import SideBarMenu from "./SideBarMenu";
import TopMenu from "./TopMenu";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYjVnMGdxNjA0dnAzb3BnZ3FkY2Vzc28ifQ.7czpNqgMmo3nEf4svBfp3A";
export default function MapTest() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(-99.0707);
  const [lat] = useState(19.4804);
  const [zoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div>
      <TopMenu title="Eat Noodles Go Travel!"></TopMenu>
      {/* <SideBarMenu menu={menu} /> */}
      <h2>Where do you want to travel next?</h2>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
