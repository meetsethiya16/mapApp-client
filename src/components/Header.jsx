import { useNavigate } from "react-router-dom";
import "./Header.css";
import Auth from "./AuthComponent";

const Header = () => {
  const navigate = useNavigate();
  const logoutFn = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <Auth />
      <div className="header">
        <button type="button" onClick={logoutFn}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;
