import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom);
  return null;
};

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState([20.5937, 78.9629]);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    console.log(navigator);
    console.log(navigator.geolocation);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setZoom(7);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  return (
    <>
      <MapContainer
        center={userLocation}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "500px" }}
      >
        <ChangeView center={userLocation} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={userLocation}>
          <Popup>Your Current Location</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapComponent;
