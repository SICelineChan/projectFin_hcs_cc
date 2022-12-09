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

import ControlPanel from "./ControlPanel";
import Pin from "./Pin";

import travelplcs from "./travelplcs.json";

const TOKEN =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYmR4Z3VxazAyN2kzcG55Nno2bTBtZmMifQ.tMJhZlbKAf53O4lJ82dzAA"; // Set your mapbox token here

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
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
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
              {popupInfo.city}, {popupInfo.country} |{" "}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.country}`}
              >
                Wikipedia
              </a>
              <br></br>
              <a
                target="_new"
                href={`http://localhost:3000/blog/${popupInfo.id}`}
              >
                My blog
              </a>
            </div>
            <img width="80%" src={popupInfo.imageUrl} alt="some img" />
          </Popup>
        )}
      </Map>

      <ControlPanel />
    </>
  );
}

// export function renderToDom(container) {
//   render(<App />, container);
// }
