import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    var path = window.location.pathname;
    if (path == "/dashboard") {
      if (!localStorage.getItem("token")) {
        navigate("/");
      }
    } else if (path == "/map") {
      if (!localStorage.getItem("token")) {
        navigate("/");
      }
    } else {
      if (localStorage.getItem("token")) {
        navigate("/dashboard");
      } else if (localStorage.getItem("token")) {
        navigate("/map");
      } else {
        navigate("/");
      }
    }
  }, []);
  return <></>;
};

export default Auth;
