import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useState } from "react";
import axios from "axios";
import { apiUrlUser } from "../ApiUrl";

const LoginPage = () => {
  const navigate = useNavigate();
  const [output, setOutput] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const userDetail = {
      username,
      password,
    };

    if (validateForm()) {
      axios
        .post(apiUrlUser + "/login", userDetail, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const userDetail = res.data.users;
          console.log(userDetail);
          localStorage.setItem("token", res.data.token);
          userDetail.password === password && userDetail.username === username
            ? navigate("/dashboard")
            : navigate("/");
        })
        .catch((err) => {
          setOutput("Username or password is incorrect");
        });
    }
  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <small className="error">{errors.username}</small>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <small className="error">{errors.password}</small>
          )}
          <button type="button" className="login-button" onClick={handleSubmit}>
            Login
          </button>
          {output && <small className="error">{output}</small>}
        </form>
      </div>
    </>
  );
};

export default LoginPage;
