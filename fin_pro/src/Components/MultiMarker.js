import * as React from "react";
import { useState, useMemo } from "react";

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import { Link } from "wouter";
import ControlPanel from "./ControlPanel";
import Pin from "./Pin";

import travelplcs from "./travelplcs.json";

const TOKEN =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYjVnMGdxNjA0dnAzb3BnZ3FkY2Vzc28ifQ.7czpNqgMmo3nEf4svBfp3A";

export default function MultiMarker() {
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
    <>
      <Map
        initialViewState={{
          latitude: 50.477,
          longitude: 0.7257,
          zoom: 2,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={TOKEN}
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
              Author: {popupInfo.author} | Country:{popupInfo.country}
              <br></br>
              Visited on:{popupInfo.visitdate} <br></br>
              <Link href={`/blog/${popupInfo.id}`}>blog</Link>
              <br></br>
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.country}`}
              >
                Wikipedia
              </a>
              <br></br>
            </div>
            <img width="100%" src={popupInfo.imageUrl} alt="some img" />
          </Popup>
        )}
      </Map>

      <ControlPanel />
    </>
  );
}
