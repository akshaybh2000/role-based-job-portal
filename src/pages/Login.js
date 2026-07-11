// src/pages/Login.js

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../apiConfig";
import "../index.css";

export const title = {
  SEEKER: "Job Seeker Login",
  EMPLOYER: "Employer Login",
  ADMIN: "Admin Login",
};

function Login() {
  const role = localStorage.getItem("role") || "SEEKER";
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      // const res = await fetchData("/login", data);

      localStorage.setItem("token", "demo-token");
      localStorage.setItem("role", role);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex-center"
      style={{ minHeight: "100vh", background: "var(--bg-primary)" }}
    >
      <div className="card" style={{ width: "400px" }}>
        <h2 className="text-center mb-2">{title[role]}</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Enter Password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-2">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
