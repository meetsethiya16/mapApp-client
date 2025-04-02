import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = () => {
  const { cityName, lat, lng } = useParams();
  const latitude = parseFloat(lat);
  const longitude = parseFloat(lng);

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={10}
      style={{ height: "500px", width: "500px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>{cityName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
