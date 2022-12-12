import React, { useState, useMemo } from "react";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import travelplcs from "./travelplcs.json";
import Pin from "./Pin";
import ControlPanel from "./ControlPanel";

const myToken =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYmR4Z3VxazAyN2kzcG55Nno2bTBtZmMifQ.tMJhZlbKAf53O4lJ82dzAA";

export default function MarkerMap() {
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
      <div>
        <h1>The add a new post page is currently under construction! </h1>
      </div>
      <div style={{ width: "400px", height: "500px" }} className="float-center">
        <Map
          initialViewState={{
            longitude: 1.7185,
            latitude: 51.3276,
            zoom: 1,
          }}
          style={{ position: "relative", width: "100%", height: "100%" }}
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
              <div>Country:{popupInfo.country}</div>
            </Popup>
          )}
        </Map>

        <ControlPanel />
      </div>
    </>
  );
}
