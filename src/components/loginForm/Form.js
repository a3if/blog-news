import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../../context/authenticationContext";
import "./Form.css";
const Form = () => {
  const url = "http://127.0.0.1:3002/";
  const { login, token } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //  const { login } = useAuth();
  //  const {token}=useAuth()

  const loginUser = async () => {
    try {
      const response = await fetch(`${url}blog/v1/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
      // Upon successful authentication, store the token in the context
      console.log("data:", res);
      if (res.data.token) {
        login(res.data.token, res.data);
        navigate("/users");
        // Assuming there's a function login() to handle token storage.
      }
      console.log("auth token", token);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Form;
