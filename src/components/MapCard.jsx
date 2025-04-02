import "./MapCard.css";

const MapCard = ({ name, latitude, longitude, onClick }) => {
  return (
    <div
      className="card-container"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <h1>{name}</h1>
    </div>
  );
};

export default MapCard;
