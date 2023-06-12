"use client";
import Map from 'react-map-gl';
import ControlPanel from './control-panel';
import GeocoderControl from './geocoder-control';

export default function Home() {
  const TOKEN = 'pk.eyJ1IjoibG91c2NoYSIsImEiOiJja3pibmZsZTYwbm1nMm9zNmdpdmJwYW5lIn0.qy5kQf2SjEf4CkSg4JcY1Q'; 
  return (
    <main>
      <Map
        initialViewState={{
          longitude: -79.4512,
          latitude: 43.6568,
          zoom: 13
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}
      >
        <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
      </Map>
      <ControlPanel />
    </main>
  )
}
