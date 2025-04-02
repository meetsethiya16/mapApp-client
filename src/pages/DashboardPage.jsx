import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MapCard from "../components/MapCard";
import axios from "axios";
import "./DashboardPage.css";
import { apiUrlDashboard } from "../ApiUrl.js";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    document.title = "Dashboard | MapApp";
  }, []);

  useEffect(() => {
    axios
      .get(apiUrlDashboard + "/cities")
      .then((response) => setCities(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="dashboard-container">
      {cities.map((city) => (
        <MapCard
          key={city._id}
          name={city.cityName}
          latitude={city.latitude}
          longitude={city.longitude}
          onClick={() =>
            navigate(`/map/${city.cityName}/${city.latitude}/${city.longitude}`)
          }
        />
      ))}
    </div>
  );
};

export default DashboardPage;
