import MapComponent from "../Components/MapComponent";
import { useEffect } from "react";

const MapPage = () => {
  useEffect(() => {
    document.title = "Map View | MapApp";
  }, []);
  return (
    <div>
      <h2>Map View</h2>
      <MapComponent />
    </div>
  );
};

export default MapPage;
