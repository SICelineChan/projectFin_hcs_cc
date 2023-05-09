import * as React from 'react';
import Map, {Popup} from 'react-map-gl';

export default function Popups() {
  const [showPopup, setShowPopup] = React.useState(true);

  const TOKEN =
  "pk.eyJ1Ijoibm9vZGxlcGVvcGxlIiwiYSI6ImNsYjVnMGdxNjA0dnAzb3BnZ3FkY2Vzc28ifQ.7czpNqgMmo3nEf4svBfp3A";
  return (
    <Map
      initialViewState={{
        longitude: -0.118092,
        latitude: 51.5072,
        zoom: 9
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}
    >

    {showPopup && (
      <Popup longitude={-0.118092} latitude={51.5072}
        anchor="bottom"
        onClose={() => setShowPopup(false)}
        >
        You're here!
      </Popup>)}
  </Map>
  );
}