import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";
import { useEffect } from "react";

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard | MapApp";
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div
        onClick={() => navigate("/map")}
        style={{
          border: "1px solid black",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <h3 style={{ textAlign: "center" }}>View Map</h3>
      </div>
    </div>
  );
};

export default DashboardPage;
