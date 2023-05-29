import React, { useState, useMemo } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import Pin from "./Pin";
import ControlPanel from "./ControlPanel";

import travelplcs from "./travelplcs.json";

import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "wouter";

const myToken =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYjVnMGdxNjA0dnAzb3BnZ3FkY2Vzc28ifQ.7czpNqgMmo3nEf4svBfp3A";

export default function DashMaps() {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      travelplcs.map((places, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={places.longitude}
          latitude={places.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(places);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <div className="dashboard-map container-size">
      <Map 
        initialViewState={{
          latitude: 50.477,
          longitude: 0.7257,
          zoom: 2,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={myToken}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              Author: {popupInfo.author} <br></br> Country:{popupInfo.country}
              <br></br>
              Visited on:{popupInfo.visitdate} <br></br>
              <Link href={`/blog/${popupInfo.id}`}>Read about this blog</Link>
              <br></br>
              <br></br>
            </div>
            <img width="100%" src={popupInfo.imageUrl} alt="some img" />
          </Popup>
        )}
      </Map>

      <ControlPanel />
    </div>
  );
}
